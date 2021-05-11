<template>
  <div>
    <main class="main">
      <aside class="main__container container-menu">
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
      </aside>
      <section class="main__project project">
        <div class="project__wrapper">
          <h1 class="project__title title">Мои проекты</h1>
        </div>
        <div class="project__inner">
          <div class="project__none" v-if="!projectData">
            <p class="project__text">У вас пока нет своих проектов</p>
            <button class="project__btn btn" @click.prevent="addNewProject">Создать проект</button>
          </div>
           <router-link :to="{name: 'infoProject', params: { id: this.projectData.id }}" v-else class="project__link">
             <span class="project__regions" >Сахалинская область</span>
             {{projectData.title}}
           </router-link>
        </div>
      </section>
      <article class="main__article article">
      </article>
      <ModalWindow v-if="createNewProject" :status-new-project.sync="createNewProject"/>
    </main>
  </div>

</template>
<script>
import ModalWindow from '@/components/modal/ModalWindow.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      createNewProject: null
    }
  },
  components: {
    ModalWindow
  },
  computed: {
    ...mapState('project', ['projectData'])
  },
  methods: {
    addNewProject () {
      this.createNewProject = true
    }
  },
  created () {
    this.createNewProject = false
  }
}
</script>
<style lang="scss" scoped>
.project{
  width: 70%;
  background: $color-white;
  border-radius: 10px;
  margin: 22px 22px 23px 44px;
  min-height: 213px;
  border: $border;
  &__wrapper{
    padding: 22px 23px 18px 22px;
    border-bottom: $border;
  }
  &__inner{
    padding: 24px 24px 32px 23px;
  }
  &__text{
    color: $color-main;
    font-weight: 500;
    font-size: 22px;
    font-family: 'SF Display';
    line-height: 28px;
  }
  &__btn{
    padding: 7px 15px;
    margin-top: 20px;
  }
  &__link{
    display: block;
    background: #F4F5F7;
    box-sizing: border-box;
    border-radius: 10px;
    max-width: 318px;
    padding: 20px 29px 23px 24px;
    color: $color-main;
    font-weight: 600;
    line-height: 20px;
    font-family: 'SF Display';
    min-height: 139px;
  }
  &__regions{
    display: block;
    color: $color-grey;
    font-size: 13px;
    line-height: 24px;
    font-family: 'SF Display';
    margin-bottom: 17px;
    background: url('../assets/icon/icon-emblem.svg') no-repeat 0 50%;
    padding-left: 25px;
  }
}
.article{
  margin-top: 22px ;
  background: $color-white;
  width: 300px;
  margin-right: 100px;
  min-height: calc(100vh - 80px);
}
</style>
