<script setup>
const { data } = useNuxtData('responseData');
const currentCategory = useState('currentGoodsCategory', () => null);

const filteredGoods = computed(() => {
  if (currentCategory.value) {
    return data.value.goods.filter((item) => item.category.includes(currentCategory.value));
  } else {
    return data.value.goods;
  }
});

const setCurrentCategory = (category) => {
  currentCategory.value = category;
};
</script>

<template>
  <div class="page">
    <div class="goods">
      <div class="categories">
        <button class="categories__btn" @click="setCurrentCategory(null)">Все</button>
        <button class="categories__btn" @click="setCurrentCategory('Девайсы')">Девайсы</button>
        <button class="categories__btn" @click="setCurrentCategory('Мерч')">Мерч</button>
      </div>
      <ul class="goods__list">
        <li v-for="item in filteredGoods" :key="item.id" class="goods__list-item">
          <GoodsCard
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :image="item.image"
            :descriprion="item.description"
            :stock="item.stock"
            :specs="item.specs"
          />
        </li>
      </ul>
    </div>
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
.goods {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    &-item {
      overflow: hidden;
      box-shadow: 1px 1px 4px 0px #0000001a;
      border-radius: 10px;
    }
  }
}
</style>
