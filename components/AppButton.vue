<script lang="ts" setup>
const props = defineProps({
  onClick: Function,
});
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #37c4cd;
  height: 48px;
  padding: 12px;
  background: none;
  border-radius: 10px;
  transition: all linear 0.3s;
  &:hover {
    color: white;
    background-color: #37c4cd;
    cursor: pointer;
  }
}
</style>
