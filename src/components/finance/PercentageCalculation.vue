<template>
  <div class="form__wrapper">
    <label class="form__label form__label--finance">
      {{nameField}}
    </label>
      <div class="form__inner">
        <p class="form__text">{{computedPercent}}</p>
        <span class="form__unit">%</span>
      </div>
      <div class="form__inner form__inner--right">
        <span class="form__color-finance" :style="{background: color}"></span>
        <p class="form__text">{{finence}}</p>
        <span class="form__unit">млн ₽</span>
      </div>
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
    finence: {
      type: Number,
      default: 0
    },
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedPercent: {
      get () {
        return this.percent
      },
      set (val) {
        this.$emit('update:percent', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .form__color-finance{
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 8px;
  }
  .form__inner--right{
    margin-left: 11px;
    display: flex;
    align-items: center;
    background: #F5F6F8;
  }
</style>
