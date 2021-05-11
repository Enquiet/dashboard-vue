<template>
  <label class="form__label">
    {{nameField}}
    <slot/>
    <ul class="form__error" v-if="error">
      <li class="error__item error" v-for="(error, index) in error" :key="index">{{error}}</li>
    </ul>
  </label>
</template>
<script>
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
  }
}
</script>
<style lang="scss" scoped>
.error__item{
  max-width: 230px;
}
</style>
