<script setup>
const route = useRoute();
const { getThumbnail: img } = useDirectusFiles();

const { data } = useNuxtData('responseData');
const event = data.value?.events.find((event) => event.id === route.params.id);
</script>

<template>
  <div class="page">
    <BackButton />
    <h1>{{ event?.title }}</h1>
    <NuxtImg :src="img(event?.banner)" />
    <p>{{ event?.description }}</p>
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
