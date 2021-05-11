<template>
   <label class="form__label">
    <input class="form__input" :placeholder="placeholder" :type="type" v-model="computedInput"/>
    <ul class="form__error error-list" v-if="error.length">
      <li class="error-list__item error" v-for="(error, index) in error" :key="index">{{error}}</li>
    </ul>
  </label>
</template>
<script>
export default {
  props: {
    type: {
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    computedInput: {
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
.form{
  &__label{
    display: block;
    margin-bottom: 15px;
    text-align: center;
  }
  &__input{
    display: block;
    padding: 9px 20px 10px 20px;
    border: 1px solid #F2F3F6;
    box-sizing: border-box;
    line-height: 18px;
    font-size: 15px;
    border-radius: 24px;
    margin: 0 auto;
    width: 350px;
    &::placeholder{
      font-size: 15px;
      color:$color-grey;
      line-height: 18px;
    }
  }
}
</style>
