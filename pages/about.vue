<script setup>
const { data } = useNuxtData('responseData');
</script>

<template>
  <div class="page">
    <BackButton />
    <div v-if="data.about" class="page__content" v-html="data.about.content"></div>
    <div v-else>
      <BackButton />
      <p>Данные не загружены или отсутствуют.</p>
    </div>
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
  }
}
</style>
