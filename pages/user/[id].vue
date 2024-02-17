<script setup>
definePageMeta({
  middleware: 'auth',
});
const route = useRoute();
const { getUserById } = useDirectusUsers();
const { data: user, pending } = await useAsyncData(`${route.params.id}`, async () => {
  try {
    const execute = await getUserById({
      id: route.params.id,
    });
    return execute;
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <div class="profile">
    <ClientOnly>
      <div class="profile__container">
        <div class="profile__avatar">
          <UserAvatar :size="'lg'" :avatar="user?.avatar" />
          <h3>{{ user?.username }}</h3>
        </div>
      </div>
      <div class="profile__container">
        <h2>Обо мне</h2>
        {{ user?.description }}
      </div>
      <div class="profile__container">
        <h2>Данные</h2>
        <ul class="profile__list">
          <li class="profile__list-item">фио: {{ user?.first_name + ' ' + user?.last_name }}</li>
          <li class="profile__list-item">город: {{ user?.location }}</li>
          <li class="profile__list-item">email: {{ user?.email }}</li>
          <li class="profile__list-item">звание: {{ user?.title }}</li>
          <li class="profile__list-item">был: {{ user?.last_access }}</li>
          <li class="profile__list-item">карма: {{ user?.karma }}</li>
        </ul>

        <h2>Ачивки</h2>
        <UserAchievements :achievements="user.user_achievements" :userId="user.id" />
      </div>
      <div class="profile__container">
        <h2>Галерея</h2>
        <UserGallery :userId="user.id" />
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  max-width: 1218px;
  margin: 30px auto;
  gap: 20px;
  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    box-shadow: 1px 1px 4px 0px #0000001a;
    background-color: white;
    border-radius: 10px;
  }
  &__avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__gallery {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    &-item {
      overflow: hidden;
      cursor: pointer;
    }
    &-img {
      width: 100%;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-item {
      box-shadow: 1px 1px 4px 0px #0000001a;
      border-radius: 10px;
      padding: 10px;
    }
  }
  &__achievements {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-item {
      box-shadow: 1px 1px 4px 0px #0000001a;
      border-radius: 10px;
      padding: 10px;
      cursor: pointer;
      &:hover {
        color: aqua;
      }
    }
  }
}
</style>
