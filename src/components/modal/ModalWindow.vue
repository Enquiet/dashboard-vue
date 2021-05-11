<template>
  <transition class="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <h2 class="modal__title title"> Создание проекта </h2>
          <p class="modal__sub-title"> Заполните данные о проекте, чтобы начать вести его на платформе </p>
          <form class="modal__form form" @submit.prevent="addNewProject">
            <ModalText name-field="Наименование проекта"  :error="error.name" v-model="propject.name"/>
            <ModalSelectField name-field="Этап проекта"  :error="error.status_id" :propject-stage.sync="propject.status_id" :list-stage="listStagesProject"/>
            <ModalSelectField name-field="Уровень проекта" :error="error.lvl_id" :propject-stage.sync="propject.lvl_id" :list-stage="levelProjectData"/>
            <div class="modal__inner">
              <button class="form__btn btn" type="submit">Создать проект</button>
              <button class="form__btn btn btn--close" @click.prevent="closeModalWindow">Отмена</button>
            </div>
          </form>
           <button class="cross-btn" @click.prevent="closeModalWindow"></button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import ModalText from '@/components/modal/ModalText.vue'
import ModalSelectField from '@/components/modal/ModalSelectField.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      propject: {
        name: '',
        status_id: 0,
        lvl_id: 0,
        form_implementation_id: 44
      },
      error: {}
    }
  },
  props: {
    statusNewProject: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ModalText, ModalSelectField
  },
  computed: {
    ...mapState('project', ['listStagesProject', 'levelProjectData'])
  },
  methods: {
    ...mapActions('project', ['LoadingStagesList', 'LoadingLevelProject', 'createNewProject']),
    async addNewProject () {
      try {
        this.error = {}
        await this.createNewProject(this.propject)
        this.closeModalWindow()
      } catch (e) {
        this.error = e.violations || {}
      }
    },
    closeModalWindow () {
      this.$emit('update:statusNewProject', false)
    }
  },
  created () {
    this.LoadingStagesList()
    this.LoadingLevelProject()
  }
}
</script>
<style lang="scss" scoped>
.modal{
  &__mask{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgb(26, 41, 91, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: table;
    overflow: hidden;
  }
  &__wrapper{
    display: table-cell;
    vertical-align: middle;
  }
  &__container{
    max-width: 554px;
    margin: 0px auto;
    padding: 35px;
    background-color: $color-white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;
  }
  &__title{
    font-weight: bold;
    text-align: center;
  }
  &__sub-title{
    font-size: 15px;
    color: $color-grey;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 32px;
  }
  &__inner{
    display: flex;
    justify-content: space-between;
  }
}
.form{
  &__btn{
    display: block;
    padding: 16px 0;
    width: 237px;
    margin-top: 25px;
  }
}
.cross-btn{
  display: block;
  border: none;
  background-color: transparent;
  background-image: url('../../assets/icon/close-btn.png');
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
  right: -30px;
  width: 20px;
  height: 20px;
}
</style>
