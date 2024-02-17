<script setup>
const { getThumbnail: img } = useDirectusFiles();
const props = defineProps({
  slides: Object,
});
</script>

<template>
  <ClientOnly>
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: '.swiper__bullet',
        // bulletActiveClass: '.swiper__bullet-active',
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      class="app-swiper"
    >
      <SwiperSlide v-for="slide in props.slides" :key="slide.id" class="app-swiper__slide">
        <NuxtLink to="/">
          <NuxtImg class="app-swiper__slide-img" :src="img(slide.image)" />
        </NuxtLink>
      </SwiperSlide>
      <SwiperControls /> </Swiper
  ></ClientOnly>
</template>

<style scoped lang="scss">
.app-swiper {
  max-width: 760px;
  width: 100%;
  max-height: 425px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  grid-column-start: 1;
  &__slide {
    &-img {
      width: 100%;
    }
  }
}
</style>
