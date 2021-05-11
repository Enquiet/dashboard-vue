<template>
  <footer class="footer">
    <p class="footer__logo">Copyright ©</p>
    <ul class="footer__list">
      <li class="footer__item">
        <a class="footer__link" href="#">Политика по обработке персональных данных</a>
      </li>
       <li class="footer__item">
        <a class="footer__link" href="#">Пользовательской соглашение</a>
      </li>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
  .footer{
    display: flex;
    background: $color-white;
    padding: 28px 105px;
    justify-content: space-between;
    &__logo{
      color: $color-primary;
    }
    &__list{
      display: flex;
      margin-left: auto;
    }
    &__item{
      &:first-child{
        margin-right: 18px;
      }
    }
    &__link{
      color: $color-primary;
    }
  }
</style>
