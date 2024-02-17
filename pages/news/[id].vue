<script setup>
const route = useRoute();
const { data } = useNuxtData('responseData');
const article = data.value?.news.find((article) => article.id === route.params.id);
</script>
<template>
  <div class="page">
    <BackButton />
    <h1>{{ article?.title }}</h1>
    <div v-html="article?.content"></div>
    <div>{{ $dayjs(article?.date_updated).format('L LT') }}</div>
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
</style>
