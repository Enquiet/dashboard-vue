<template>
 <main class="main">
    <aside class="main__container flex-container">
      <nav class="main__menu main-menu">
        <ul class="main-menu__list">
          <li class="main-menu__item">
            <router-link :to="{name: 'main'}" class="main-menu__link main-menu__link--main"></router-link>
          </li>
        </ul>
      </nav>
      <div class="main__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a  class="menu__link menu__link--active">Проект</a>
          </li>
          <li class="menu__item">
            <a  class="menu__link">Сообщения</a>
          </li>
        </ul>
      </div>
    </aside>
    <section class="main__section info-project">
      <div class="info-project__wrapper">
        <router-link :to="{name: 'main'}">Назад</router-link>
      </div>
      <div class="big-wrapper">
        <div class="info-project__container funding">
          <div class="funding__wrapper">
            <a href="#" class="funding__link">Анкета проекта</a>
          </div>
          <div class="funding__model">
            <div class="funding__heading">
              <p class="funding__label">Технико-экономическое обоснование и финансовая модель</p>
            </div>
            <div class="funding__inner">
              <p class="funding__title">Общие затраты на инвестицонной фазе, включая платежи в пользу финансовой организации и затраты на СПК</p>
              <form class="funding__form info-finance">
                <FinanceNumber
                  name-field="Общий объем финансирования"
                  :finence.sync="finence.total"
                  />
                  <FinanceNumber
                  name-field="Общий объем бюджетных инвестиций"
                  :finence.sync="finence.budget"
                  />
                  <FinanceNumber
                  name-field="Общий объем частных инвестиций"
                  :finence.sync="finence.private"
                  />
                  <span class="error error--finance" v-if="amount > finence.total">Сумма общий объем бюджетных инвестиций и общий объем частных инвестиций привышена! </span>
              </form>
              <p class="funding__title">Структура финансирования</p>
              <form class="funding__form">
                <PercentageCalculation
                  name-field="Общий объем финансирования"
                  :percent.sync="computedBuget"
                  :finence="finence.budget"
                  :color="color.blue"
                />
                <PercentageCalculation
                  name-field="Объем частного финансирования"
                  :percent.sync="computedPrivate"
                  :finence="finence.private"
                  :color="color.purple"
                />
              </form>
            </div>
          </div>
        </div>
        <AboutProject v-if="infoProjectData" :info-project="infoProjectData"/>
      </div>
    </section>
  </main>
</template>

<script>
import FinanceNumber from '@/components/finance/FinanceNumber.vue'
import PercentageCalculation from '@/components/finance/PercentageCalculation.vue'
import AboutProject from '@/components/finance/AboutProject.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      finence: {
        total: 0,
        budget: 0,
        private: 0
      },
      color: {
        blue: '#505C83',
        purple: '#BF76AB'
      }
    }
  },
  components: {
    FinanceNumber, PercentageCalculation, AboutProject
  },
  computed: {
    ...mapState('project', ['infoProjectData']),
    ...mapGetters('project', ['addFakeData']),
    id () { return this.$route.params.id },
    computedBuget () {
      return Math.floor((this.finence.total / 100) * this.finence.budget)
    },
    computedPrivate () {
      return Math.floor((this.finence.total / 100) * this.finence.private)
    },
    amount () {
      return this.finence.budget + this.finence.private
    }
  },
  methods: {
    ...mapActions('project', ['loadingInfoProject']),
    async getProjectInfoId () {
      try {
        await this.loadingInfoProject(this.id)
      } catch {
        this.$router.replace({ name: '404' })
      }
    }
  },
  watch: {
    '$route.params.id': {
      async handler () {
        await this.getProjectInfoId()
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-container{
  display: flex;
}
.big-wrapper{
  display: flex;
  align-items: flex-start;
}
.main-menu{
  background: #F5F6F8;
  width: 67px;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  &__link{
    display: block;
    height: 20px;
    width: 20px;
    margin: 0 auto;
    &--main{
      background: url('../assets/icon/menu-icon__main.svg') no-repeat;
    }
  }
}
.info-project{
  width: 100%;
  &__wrapper{
    min-height: 212px;
    width: 100%;
    padding: 38px 100px 20px 35px;
    margin-bottom: 35px;
    background: $color-white;
  }
  &__container{
    margin-left: 35px;
  }
}
.info-finance{
  margin-bottom: 42px;
}
.error--finance{
  max-width: 500px;
}
</style>
