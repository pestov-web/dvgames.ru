export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useDirectusUser();
  if (!user.value) {
    useCookie('redirect', { path: '/' }).value = to.fullPath;
    return navigateTo('/user/signin');
  }
});
