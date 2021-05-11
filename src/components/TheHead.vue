<template>
  <header class="header header--swadow">
    <div class="header__login"  v-if="this.$route.name === 'login'" >
      <ul class="header__list">
        <li class="header__item">
          <a class="header__link" href="#">Бизнесу</a>
        </li>
        <li class="header__item">
          <a class="header__link" href="#">Власти</a>
        </li>
      </ul>
    </div>
    <div class=" header__wrapper" :class="{ 'header__wrapper--right' : this.$route.name !== 'login'}">
      меню
    </div>
  </header>
</template>
<style lang="scss" scoped>
 .header--swadow{
   box-shadow: 0px 11px 15px rgba(35, 52, 107, 0.05);
 }
.header__wrapper{
  font-weight: 500;
}
.header__wrapper--right{
  margin-left: auto;
}
</style>
