<script lang="ts" setup></script>

<template>
  <header class="header">
    <AppLogo />
    <AppNav />
    <UserMenu />
  </header>
</template>

<style scoped lang="scss">
.header {
  box-sizing: border-box;
  margin: 40px auto 0;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1218px;
  width: 100%;
  height: 98px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
