<script setup>
const user = useDirectusUser();
const { getThumbnail: img } = useDirectusFiles();
const props = defineProps({
  size: String,
  avatar: String,
  userId: String,
});

const sizeClass = {
  lg: 'avatar avatar_lg',
  sm: 'avatar avatar_sm',
  default: 'avatar',
};

const getAvatarSrc = () => {
  if (props.avatar) {
    return img(props.avatar);
  }
  if (user.value) {
    return img(user.value.avatar);
  } else return '/img/dvgames-ava.jpg';
};
</script>

<template>
  <div :class="[sizeClass[props.size] || sizeClass.default]">
    <ClientOnly>
      <NuxtImg class="avatar__img" :src="getAvatarSrc()" />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  overflow: hidden;
  &__img {
    height: 100%;
    width: 100%;
  }
  &_lg {
    height: 148px;
    width: 148px;
  }
  &_sm {
    height: 25px;
    width: 25px;
  }
}
</style>
