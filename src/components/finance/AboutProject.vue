<template>
  <div class="info-project__container funding about-project">
    <p class="funding__label funding__wrapper">О проекте</p>
     <ul class="funding__list">
      <li class="funding__item">
        <p class="funding__sub-text">Добавлен: <span class="funding__data-text">{{infoProject.date}}</span></p>
        <p class="funding__sub-text">№ проекта: <span class="funding__data-text">{{infoProject.id}}</span></p>
      </li>
      <li class="funding__item">
        <p class="funding__sub-text">Субъекты проекта:
          <span class="funding__data-text">Самарская область</span> <span class="funding__data-text">Самарская область</span>
        </p>
      </li>
      <li class="funding__item funding__data-text">
        <p class="funding__sub-text">Федеральный округ:
          <span class="funding__data-text">Сибирский</span>
        </p>
      </li>
      <li class="funding__item funding__data-text">
        <p class="funding__sub-text">Публичный партнер:
          <span class="funding__data-text">Российская Федерация</span>
        </p>
      </li>
      <li class="funding__item funding__data-text">
        <p class="funding__sub-text">Уровень проекта::
          <span class="funding__data-text">{{infoProject.initiative_level.title}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    infoProject: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.about-project{
  width: 188px;
  border: $border;
  border-radius: 10px;
}
.funding__sub-text,
.funding__data-text{
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
}
.funding__sub-text{
    display: block;
  color: $color-grey;
  margin-bottom: 8px;
}
.funding__data-text{
  color: $color-main;
}
.funding__item{
  margin-bottom: 18px;
}
</style>
