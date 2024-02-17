export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useStrapiUser();
  if (user.value?.id) {
    useCookie('redirect', { path: '/' }).value = to.fullPath;
    return navigateTo('/user/me');
  }
});
