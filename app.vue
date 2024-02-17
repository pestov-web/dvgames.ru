<script setup lang="ts">
const { getItems } = useDirectusItems();
const { getUsers } = useDirectusUsers();
interface News {
  id?: string | number;
  content: string;
  status: string;
  banner: string;
  categories: Array<string>;
  description: string;
  title: string;
  date_created: string;
  user_created: string;
}
interface Events {
  id?: string | number;
  content: string;
  status: string;
  title?: string;
  icon: string;
  date: string;
  place: string;
}
interface Slides {
  id?: string | number;
  image: string;
  title: string;
}
interface About {
  id?: string | number;
  content: string;
}
interface Achievements {
  id?: string | number;
  name: string;
  description: string;
  banner: string;
}
interface Gallery {
  id?: string | number;
  status: string;
  title: string;
  descriprion: string;
}
interface GalleryFiles {
  id?: string | number;
  gallery_id: string;
  directus_files_id: string;
}
interface Goods {
  id?: string | number;
  name: string;
  description: string;
  image: string;
  status: string;
  descriprion: string;
  specs: string;
  price: number;
  stock: number;
  category: string;
}

await useAsyncData('responseData', async () => {
  const [news, events, slides, users, about, achievements, gallery, galleryFiles, goods] = await Promise.all([
    getItems<News>({
      collection: 'news',
      params: {},
    }),
    getItems<Events>({
      collection: 'events',
      params: {},
    }),
    getItems<Slides>({
      collection: 'slides',
      params: {},
    }),
    getUsers(),
    getItems<About>({
      collection: 'about',
      params: {},
    }),
    getItems<Achievements>({
      collection: 'achievements',
      params: {},
    }),
    getItems<Gallery>({
      collection: 'gallery',
      params: {},
    }),
    getItems<GalleryFiles>({
      collection: 'gallery_files',
      params: {},
    }),
    getItems<Goods>({
      collection: 'goods',
      params: {},
    }),
  ]);

  return { news, events, slides, users, about, achievements, gallery, galleryFiles, goods };
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
