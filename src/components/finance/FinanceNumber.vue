<template>
  <div class="form__wrapper">
    <label class="form__label form__label--finance">
      {{nameField}}
    </label>
      <input class="form__field form__text form__field--finance" type="number" placeholder="0" v-model.number="number"/>
      <span class="form__unit">млн ₽</span>
  </div>
</template>
<script>
export default {
  components: {

  },
  props: {
    nameField: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    finence: {
      type: Number,
      default: 0
    }
  },
  computed: {
    number: {
      get () {
        return this.finence
      },
      set (val) {
        this.$emit('update:finence', val)
      }
    }
  }
}
</script>
