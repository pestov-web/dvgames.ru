<script setup>
import { ref } from 'vue';
const submitted = ref(false);
const router = useRouter();
const { login } = useDirectusAuth();

const submitHandler = async (credentials) => {
  try {
    await login(credentials);
    router.push('/');
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div class="page">
    <section class="sign">
      <div class="sign__form">
        <h1 class="">Вход</h1>
        <FormKit
          type="form"
          id="registration-example"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Register"
          @submit="submitHandler"
          :actions="false"
          #default="{ value }"
        >
          <FormKit
            type="text"
            name="email"
            label="Ваш email"
            placeholder="ivan@dvgames.ru"
            help="Мы не будем слат вам спам =)"
            validation="required|email"
          />
          <div class="double">
            <FormKit
              type="password"
              name="password"
              label="Пароль"
              validation="required|length:6|matches:/[^a-zA-Z]/"
              :validation-messages="{
                matches: 'Please include at least one symbol',
              }"
              placeholder="******"
              help="Введите пароль"
            />
          </div>

          <FormKit type="submit" label="Вход" />
          <p class="">
            Еще не зарегистрированы?
            <nuxt-link to="/user/signup" class="">Регистрация</nuxt-link>
          </p>
        </FormKit>
        <div v-if="submitted">
          <h2>Регистрация успешна</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 1px 1px 4px 0px #0000001a;
  border-radius: 10px;
  max-width: 1218px;
  margin: 30px auto;
}
.sign {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 650px;
  &__form {
    width: fit-content;
  }
}
</style>
