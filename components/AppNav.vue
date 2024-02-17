<script lang="ts" setup>
const menuItems = [
  {
    title: 'Новости',
    url: '/',
  },
  {
    title: 'О нас',
    url: '/about',
  },
  {
    title: 'Магазин',
    url: 'market',
  },
  {
    title: 'Галерея',
    url: '/gallery',
  },
  {
    title: 'Пользователи',
    url: '/user',
  },
];
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in menuItems" :key="item.title" class="nav__item">
        <NuxtLink class="nav__link" activeClass="nav__link-active" :to="item.url">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  &__list {
    display: flex;
    gap: 30px;
  }
  &__link {
    text-decoration: none;
    color: #282828;
    font-size: 20px;
    line-height: 28.9px;
    height: 40px;
    display: flex;
    align-items: center;
    &-active {
      color: #37c4cd;
      border-bottom: 2px solid #37c4cd;
    }
  }
}
</style>
