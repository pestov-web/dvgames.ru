<script setup>
const { data: responseData } = useNuxtData('responseData');
const currentCategory = useState('currentCategory');

const filteredNews = computed(() => {
  if (currentCategory.value) {
    return responseData.value.news.filter((item) => item.categories.includes(currentCategory.value));
  } else {
    return responseData.value.news;
  }
});

const setCurrentCategory = (category) => {
  currentCategory.value = category;
};
</script>

<template>
  <div class="page">
    <div class="main">
      <AppSlider :slides="responseData?.slides" />

      <div class="news">
        <div class="categories">
          <button class="categories__btn" @click="setCurrentCategory(null)">Все</button>
          <button class="categories__btn" @click="setCurrentCategory('Покер')">Покер</button>
          <button class="categories__btn" @click="setCurrentCategory('Киберспорт')">Киберспорт</button>
          <button class="categories__btn" @click="setCurrentCategory('Экстрим')">Экстрим</button>
        </div>
        <ul class="news__list">
          <li v-for="item in filteredNews" :key="item.id" class="news__list-item">
            <NewsCard
              v-if="item.status === 'published'"
              :id="item.id"
              :banner="item.banner"
              :categories="item.categories"
              :description="item.description"
              :title="item.title"
              :date="item.date_created"
              :user="item.user_created"
            />
          </li>
        </ul>
      </div>
    </div>

    <div class="aside">
      <div class="events">
        <EventsCalendar />
        <ul class="events__list">
          <li v-for="item in responseData?.events" :key="item.id" class="events__list-item">
            <EventsCard :id="item.id" :title="item.title" :place="item.place" :date="item.date" :icon="item.icon" />
          </li>
        </ul>
      </div>
      <div class="test__container">
        <div class="test__container-box"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  gap: 30px;
  margin: 30px auto 0;
  width: 100%;
  max-width: 1218px;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.news {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  max-width: 760px;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 1px 1px 4px 0px #0000001a;
  border-radius: 10px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
.aside {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 428px;
  gap: 30px;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 1px 1px 4px 0px #0000001a;
  border-radius: 10px;
  height: fit-content;
  &__list {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 368px;
  }
}
.test__container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 4px 0px #0000001a;
  border-radius: 10px;
  padding: 30px;
  &-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #dff6fc;
    border-radius: 20px;
  }
}
</style>
