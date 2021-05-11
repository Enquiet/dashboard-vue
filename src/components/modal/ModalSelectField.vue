<template>
  <ModalField :name-field="nameField" :error="error">
    <div class="select">
      <select class="form__field form__text" type="text" v-model.number="stageName">
        <option  value="0" disabled selected>Выберите из списка</option>
        <option  v-for="stage in listStage" :key="stage.id" :value="stage.id">{{stage.title}}</option>
      </select>
    </div>
  </ModalField>
</template>
<script>
import ModalField from '@/components/modal/ModalField.vue'
export default {
  props: {
    nameField: {
      type: String,
      default: ''
    },
    listStage: {
      type: Array,
      default: () => []
    },
    propjectStage: {
      type: Number,
      default: 0
    },
    error: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ModalField
  },
  computed: {
    stageName: {
      get () {
        return this.propjectStage
      },
      set (val) {
        this.$emit('update:propjectStage', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.select{
  position: relative;
  width: 480px;
  margin-top: 8px;
  &::after{
    content: '';
    display: block;
    position: absolute;
    background: url('../../assets/icon/arrow-select.svg') no-repeat;
    padding: 0 8px;
    font-size: 12px;
    right: 18px;
    top: 19px;
    z-index: 100000;
    width: 10px;
    height: 10px;
  }
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
