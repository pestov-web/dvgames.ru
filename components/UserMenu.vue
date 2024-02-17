<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const user = useDirectusUser();
const { logout } = useDirectusAuth();

const router = useRouter();

const logOut = () => {
  logout();

  router.push('/');
};
</script>

<template>
  <ClientOnly>
    <ul v-if="user" class="usermenu">
      <li class="usermenu__item">
        <NuxtLink to=""> <Icon name="ph:shopping-cart-simple" size="32" /></NuxtLink>
      </li>
      <li class="usermenu__item">
        <NuxtLink to=""><Icon name="ph:bell" size="32" /></NuxtLink>
      </li>
      <li class="usermenu__item">
        <Menu as="div" class="usermenu__dropdown">
          <MenuButton class="usermenu__dropdown-avatar">
            <UserAvatar size="'sm'" />
          </MenuButton>
          <transition
            enter-active-class="enter-animation"
            enter-from-class="enter-animation-form"
            enter-to-class="enter-animation-to"
            leave-active-class="leave-animation"
            leave-from-class="leave-animation-form"
            leave-to-class="leave-animation-to"
          >
            <MenuItems class="usermenu__dropdown-items">
              <MenuItem class="usermenu__dropdown-item" v-slot="{ active }">
                <NuxtLink to="/user/me"
                  ><Icon class="usermenu__dropdown-icon" name="material-symbols:person" size="24" /> Профиль</NuxtLink
                >
              </MenuItem>

              <MenuItem class="usermenu__dropdown-item" disabled>
                <span class="opacity-75"
                  ><Icon class="usermenu__dropdown-icon" name="material-symbols:settings-account-box" size="24" />
                  Настройки</span
                >
              </MenuItem>
              <MenuItem class="usermenu__dropdown-item" v-slot="{ active }">
                <NuxtLink class="usermenu__dropdown-button" @click="logOut"
                  ><Icon class="usermenu__dropdown-icon" name="material-symbols:logout" size="24" /> Выход</NuxtLink
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </li>
    </ul>
    <ul v-if="!user" class="usermenu">
      <li class="usermenu__item">
        <NuxtLink class="usermenu__button" to="/user/signup">Регистрация</NuxtLink>
      </li>
      <li class="usermenu__item">
        <NuxtLink class="usermenu__button" to="/user/signin">Вход</NuxtLink>
      </li>
    </ul></ClientOnly
  >
</template>

<style scoped lang="scss">
.usermenu {
  display: flex;
  align-items: center;
  gap: 30px;
  &__button {
    box-sizing: border-box;
    display: flex;
    height: 48px;
    border-radius: 10px;
    border: 2px solid black;
    text-decoration: none;
    color: black;
    align-items: center;
    padding: 0 26px;
    font-size: 20px;
    transition: all linear 0.3s;
    &:hover {
      color: white;
      background-color: #37c4cd;
      border-color: #37c4cd;
    }
  }
  &__dropdown {
    position: relative;
    display: inline-block;
    &-avatar {
      border: none;
      background: none;
      cursor: pointer;
    }
    &-items {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: white;
      box-shadow: 4px 10px 40px 10px #0000000f;
      padding: 20px;
    }
    &-item {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: solid black 0.5px;
      text-decoration: none;
      height: 24px;
      color: black;
      &:hover {
        color: #37c4cd;
      }
    }
    &-button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    &-icon {
      color: #37c4cd;
    }
  }
}
.enter-animation {
  transition: all 100ms ease-out;
  opacity: 0;
  &-from {
    transform: scale(0.95);
    opacity: 0;
  }
  &-to {
    transform: scale(1);
    opacity: 1;
  }
}
.leave-animation {
  transition: all 75ms ease-in;
  opacity: 1;
  &-from {
    transform: scale(1);
    opacity: 1;
  }
  &-to {
    transform: scale(0.95);
    opacity: 0;
  }
}
</style>
