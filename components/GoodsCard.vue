<script setup>
const { getThumbnail: img } = useDirectusFiles();
const props = defineProps({
  id: String,
  name: String,
  image: String,
  status: String,
  descriprion: String,
  specs: String,
  price: Number,
  stock: Number,
});
</script>

<template>
  <div class="goods-card">
    <NuxtLink :to="`/market/${props.id}`">
      <NuxtImg :src="img(props.image)" class="goods-card__img" />
    </NuxtLink>

    <h2 class="goods-card__title">{{ props.name }}</h2>
    <div class="goods-card__buy">
      <span class="goods-card__buy-price">{{ props.price }} ₽</span>
      <button class="goods-card__buy-btn">Купить</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.goods-card {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__img {
    height: 250px;
  }
  &__title {
    font-size: 24px;
    text-align: center;
  }
  &__buy {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    &-btn {
      height: 32px;
      border: 2px solid #37c4cd;
      border-radius: 10px;
      color: #37c4cd;
      background-color: white;
      transition: all linear 0.3s;
      &:hover {
        color: white;
        background-color: #37c4cd;
        cursor: pointer;
      }
    }
  }
}
</style>
