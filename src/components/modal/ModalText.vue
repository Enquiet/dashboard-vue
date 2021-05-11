<template>
  <ModalField :name-field="nameField" :error="error">
    <input class="form__field form__text form__field--input" type="text" placeholder="Введите полное наименование проекта" v-model="nameProject"/>
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
    error: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ModalField
  },
  computed: {
    nameProject: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form__field--input{
  margin-top: 16px;
}
</style>
