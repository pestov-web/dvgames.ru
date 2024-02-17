<script setup>
const props = defineProps({
  userId: String,
});
const isOpen = useState('galleryModal', () => false);
const pictureUrl = useState('galleryPicture', () => null);
const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

const { data: gallery, pending } = await useAsyncData(`gallery-${props.userId}`, async () => {
  try {
    const filters = { directus_users_id: props.userId };
    const execute = await getItems({
      collection: 'junction_directus_users_files',
      params: {
        filter: filters,
      },
    });
    return execute;
  } catch (e) {
    console.log(e);
  }
});
function openModal(url) {
  isOpen.value = true;
  pictureUrl.value = url;
}
</script>

<template>
  <div class="gallery">
    <ul class="gallery__list">
      <li
        class="gallery__list-item"
        v-for="item in gallery"
        :key="item.id"
        @click="openModal(img(item.directus_files_id, { width: 600, format: 'webp' }))"
      >
        <NuxtImg
          class="gallery__img"
          :src="img(item.directus_files_id, { width: 300, format: 'webp' })"
          :placeholder="[50, 25, 75, 5]"
        />
      </li>
    </ul>
    <AppModal>
      <NuxtImg class="modal__dialog-image" :src="pictureUrl" :placeholder="[50, 25, 75, 5]" fit="cover"
    /></AppModal>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    &-item {
      max-height: 136px;
      overflow: hidden;
      box-shadow: 4px 10px 40px 10px #0000000f;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>
