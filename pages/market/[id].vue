<script setup>
const route = useRoute();
const { getThumbnail: img } = useDirectusFiles();

const { data } = useNuxtData('responseData');
const good = data.value?.goods.find((good) => good.id === route.params.id);
</script>

<template>
  <div class="page">
    <BackButton />
    <ul class="page__content">
      <li>{{ good?.name }}</li>
      <li>{{ good?.price }}</li>
      <li>{{ good?.stock }}</li>
      <li>{{ good?.description }}</li>
      <li><div v-html="good.specs"></div></li>
      <li><NuxtImg :src="img(good?.image)" /></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 1px 1px 4px 0px #0000001a;
  border-radius: 10px;
  max-width: 1218px;
  margin: 30px auto;
  &__content {
    width: 100%;
    overflow: hidden;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
}
</style>
