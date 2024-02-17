<script setup>
definePageMeta({
  middleware: 'auth',
});
const { data } = useNuxtData('responseData');
const router = useRouter();
</script>

<template>
  <div class="page">
    <div class="users">
      <h2 class="users__title">Пользователи:</h2>
      <ul class="users__list">
        <li class="users__list-item" v-for="user in data.users">
          <NuxtLink class="users__list-link" :to="`/user/${user.id}`"
            ><UserAvatar :avatar="user.avatar" /><span>ник: {{ user.username }}</span
            ><span>email: {{ user.email }}</span
            ><span>фио: {{ user.first_name + ' ' + user.last_name }}</span
            ><span>карма: {{ user.karma }}</span></NuxtLink
          >
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
.users {
  &__title {
    margin: 0 0 20px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    &-link {
      color: black;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px;
      box-shadow: 1px 1px 4px 0px #0000001a;
      border-radius: 10px;
    }
  }
}
</style>
