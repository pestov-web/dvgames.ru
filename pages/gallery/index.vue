<script setup>
const { data } = useNuxtData('responseData');
const { getThumbnail: img } = useDirectusFiles();
const currentGallery = useState('galleryCategory', () => data.value.gallery[0].id);
const isOpen = useState('galleryModal', () => false);
const pictureUrl = useState('galleryPicture', () => null);

const filteredGallery = computed(() => {
  if (currentGallery.value) {
    return data.value.galleryFiles.filter((item) => item.gallery_id.includes(currentGallery.value));
  }
});

const setCurrentGallery = (gallery) => {
  currentGallery.value = gallery;
};

function openModal(url) {
  isOpen.value = true;
  pictureUrl.value = url;
}
</script>

<template>
  <div class="page">
    <div class="gallery">
      <ul class="gallery__nav">
        <li v-for="item in data.gallery" class="gallery__nav-item">
          <button class="gallery__nav-btn" @click="setCurrentGallery(item.id)">{{ item.title }}</button>
        </li>
      </ul>
      <ul class="gallery__list">
        <li
          v-for="item in filteredGallery"
          class="gallery__list-item"
          :key="item.id"
          @click="openModal(img(item.directus_files_id, { width: 600, format: 'webp' }))"
        >
          <NuxtImg class="gallery__img" :src="img(item.directus_files_id, { width: 300, format: 'webp' })" />
        </li>
      </ul>
    </div>
    <AppModal>
      <NuxtImg class="modal__dialog-image" :src="pictureUrl" :placeholder="[50, 25, 75, 5]" fit="cover"
    /></AppModal>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 1px 1px 4px 0px #0000001a;
  border-radius: 10px;
  max-width: 1218px;
  margin: 30px auto;
}

.gallery {
  &__nav {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 5px;
    border-bottom: 2px solid #eff1f7;
    margin-bottom: 20px;

    &-btn {
      background: none;
      border: none;
      cursor: pointer;
      height: 40px;
      transition: all linear 0.3s;
      font-size: 24px;
      &:hover {
        color: #37c4cd;
        cursor: pointer;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    &-item {
      overflow: hidden;
      box-shadow: 4px 10px 40px 10px #0000000f;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>
