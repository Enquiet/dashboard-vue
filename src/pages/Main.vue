<template>
  <main class="main">
    <div class="main__container container-menu">
      <nav class="main__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <router-link :to="{name: 'main'}" class="menu__link menu__link--active">Главная</router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{name: 'projects'}" class="menu__link">Мои проекты</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <h1 class="title"> Главная страница</h1>
  </main>
</template>
