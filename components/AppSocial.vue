<script lang="ts" setup></script>

<template>
    <ul class="social">
        <li class="social__item">
            <NuxtLink to="/" class="social__link"><Icon name="logos:whatsapp-icon" size="32" /></NuxtLink>
        </li>
        <li class="social__item">
            <NuxtLink to="/" class="social__link"><Icon name="logos:telegram" size="26" /></NuxtLink>
        </li>
        <li class="social__item">
            <NuxtLink to="/" class="social__link"><Icon name="logos:discord-icon" size="32" /></NuxtLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.social {
    display: flex;
    gap: 10px;
    align-items: center;
    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all linear 0.3s;
    }
}
</style>
