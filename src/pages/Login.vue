<template>
<div>
  <div class="authorization">
    <div class="authorization__container">
      <h1 class="authorization__title">Вход</h1>
      <form class="authorization__form form" @submit.prevent="accountLogin">
        <LoginField v-model="user.email" :error="error.email" type="email" placeholder="Введите Email"/>
        <LoginField v-model="user.password" :error="error.password" type="password" placeholder="Введите пароль"/>
        <button class="form__btn btn"> Войти</button>
        <ul class="form__list">
          <li class="form__item">
             <a href="#" class="form__link">Забыли пароль?</a>
          </li>
           <li class="form__item">
              <p class="form__text">Нет аккаунта? <a href="#" class="form__link">Зарегистрируйтесь</a></p>
          </li>
        </ul>
      </form>
    </div>
  </div>
  <LoginFooter/>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import LoginField from '@/components/login/LoginField.vue'
import LoginFooter from '@/components/login/LoginFooter.vue'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  components: {
    LoginField, LoginFooter
  },
  methods: {
    ...mapActions('authentication', ['LoadingLoginUser']),
    async accountLogin () {
      try {
        await this.LoadingLoginUser(this.user)
        this.$router.push({ name: 'main' })
      } catch (e) {
        console.log(e.violations)
        this.error = e.violations || {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.authorization{
  min-height: calc(100vh - 140px );
  background: #E5E5E5;
  display: flex;
  align-items: center;
  &__container{
    width: 409px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
  }
  &__title{
    color: $color-main;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
  }
}
.form{
  margin-top: 29px;
  margin-bottom: 25px;
  &__btn{
    line-height: 1px;
    padding: 20px 0;
    width: 77px;
    margin: 0 auto;
  }
  &__list{
    margin-top: 22px;
  }
  &__item{
    text-align: center;
    &:first-child{
      margin-bottom: 6px;
    }
  }
  &__text{
    color: $color-grey;
  }
  &__link{
    color: $color-grey;
    border-bottom: 1px solid $color-grey;
  }
}
</style>
