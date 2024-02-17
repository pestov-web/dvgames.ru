<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
});
const { requestPasswordReset, resetPassword } = useDirectusAuth();
const router = useRouter();
const handelRequestPasswordReset = async () => {
  try {
    await requestPasswordReset({ email: '' });
  } catch (e) {}
};

const handelResetPassword = async () => {
  try {
    await resetPassword({ token: '', password: '' });
  } catch (e) {}
};
</script>

<template>
  <div>Page: foo</div>
</template>

<style scoped></style>
