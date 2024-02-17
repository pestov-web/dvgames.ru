<script setup>
const props = defineProps({
  id: String | Number,
  title: String,
  slug: String,
  place: String,
  date: String,
  icon: String,
});
</script>

<template>
  <div class="eventcard">
    <div class="eventcard__info">
      <NuxtLink class="eventcard__link" :to="`/events/${props.id}`">
        <h2 class="eventcard__title">
          <Icon :name="`${props.icon}`" size="32" class="eventcard__icon" /> {{ props.title }}
        </h2></NuxtLink
      >

      <span class="eventcard__place">{{ props.place }}</span>
      <span class="eventcard__date">{{ $dayjs(props.date).format('L LT') }}</span>
    </div>
    <div class="eventcard__reg">
      <button class="eventcard__reg-button"><Icon name="material-symbols:add" size="24" /></button>
      <span class="eventcard__reg-text">РЕГ</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eventcard {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid black;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  &__icon {
    color: #37c4cd;
  }
  &__link {
    cursor: pointer;
    text-decoration: none;
    color: black;
    transition: all linear 0.3s;
    &:hover {
      color: #37c4cd;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__reg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      width: 48px;
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
    &-text {
      font-size: 24px;
    }
  }
  &__date {
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    height: 34px;
    align-items: center;
    padding: 0 20px;
    width: fit-content;
  }
}
</style>
