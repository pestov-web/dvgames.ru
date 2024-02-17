<script setup>
const { getThumbnail: img } = useDirectusFiles();
const { getUserById } = useDirectusUsers();
const props = defineProps({
  id: String | Number,
  title: String,
  description: String,
  banner: String,
  categories: Array,
  date: String,
  user: String,
});

const { data } = useNuxtData('responseData');
const author = data.value.users.find((user) => user.id === props.user);
</script>

<template>
  <div class="news-card">
    <NuxtImg class="news-card__img" :src="img(props.banner)" />
    <ul class="news-card__badges">
      <li v-if="props.categories" v-for="(item, index) in props.categories" :key="index" class="news-card__badges-item">
        {{ item }}
      </li>
    </ul>
    <h2 class="news-card__title">{{ props.title }}</h2>
    <p class="news-card__description">{{ props.description }}</p>
    <NuxtLink class="news-card__link" :to="`/news/${props.id}`"
      >Подробнее <Icon name="mdi:chevron-right" size="22px"
    /></NuxtLink>
    <div class="news-card__info">
      <div class="news-card__info-user">
        <UserAvatar :avatar="author?.avatar" :size="'sm'" /><span>{{ author?.username }}</span>
      </div>
      <span class="news-card__info-date">{{ $dayjs(props.date).format('L LT') }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border-bottom: 0.5px solid #c9c9c9;
  padding-bottom: 20px;
  &__img {
    border-radius: 10px;
  }
  &__badges {
    display: flex;
    gap: 10px;
    &-item {
      display: flex;
      align-items: center;
      height: 40px;
      background: #37c4cd;
      border-radius: 10px;
      color: #ffffff;
      padding: 0 15px;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #37c4cd;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-user {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
