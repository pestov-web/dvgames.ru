<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
    <div class="slider-buttons">
        <button class="button button__prev" @click="swiper.slidePrev()">
            <Icon name="ic:baseline-chevron-left" size="32" />
        </button>
        <button class="button button__next" @click="swiper.slideNext()">
            <Icon name="ic:baseline-chevron-right" size="32" />
        </button>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style lang="scss">
.slider-buttons {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 0 15px;
    align-items: center;
}
.button {
    position: relative;
    z-index: 10;
    height: 48px;
    width: 48px;
    background: none;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    transition: all linear 0.3s;
    &:hover {
        background-color: #37c4cd;
        border-color: #37c4cd;
    }
}
</style>
