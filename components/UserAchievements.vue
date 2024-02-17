<script setup>
const props = defineProps({
  achievements: Object,
  userId: String,
});

const { getItems } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();

const { data: achievements, pending } = await useAsyncData(`achivs-${props.userId}`, async () => {
  try {
    const filters = { id: props.achievements.key };
    const execute = await getItems({
      collection: 'achievements',
      params: {
        filter: filters,
      },
    });
    return execute;
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <ul class="achievements">
    <li class="achievements__item" v-for="item in achievements">
      <NuxtLink class="achievements__item-link" :to="`/achievements/${props.achievements.key}`">{{
        item.name
      }}</NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.achievements {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &__item {
    box-shadow: 1px 1px 4px 0px #0000001a;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    &-link {
      text-decoration: none;
      color: black;
      &:hover {
        color: aqua;
      }
    }
  }
}
</style>
