<template>
  <div id="app">
    <tabbar></tabbar>
    <div class="main-router">
      <nuxt/>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Tabbar from '../components/public/Tabbar.vue'
import Foot from '../components/public/Foot'

export default {
  name: 'app',
  components: {
    Tabbar,
    Foot
  }
}
</script>

<style lang="less">
@import "~assets/style/base.less";
.main-router {
  padding-top: 60px;
}

.page {
  &-enter-active {
    transition: opacity 2s;
  }
  &-leave-active {
    transition: opacity .5s;
  }
  &-enter,
  &-leave-active {
    height: 0;
    opacity: 0
  }
}

.card {
  width: 100%;
  padding: 50px 0 40px 0;

  &-grid {
    width: 100%;
    padding: 0 10%;
  }
  .title {
    text-align: center;
    h2 {
      display: block;
      width: 100%;

      font-size: 26px;
      font-weight: 500;
      text-align: center;
    }
    p {
      display: block;

      margin-top: 20px;
      width: 100%;

      text-align: center;
    }
  }
  .more {
    display: block;

    width: 150px;
    height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid #dfdfdf;

    text-align: center;
    font-size: 13px;
    line-height: 50px;
    transition: .2s;
    &:hover {
      border: 1px solid @a-hover-color;
    }
  }
  &:nth-child(2n+1) {
    background: @bg-footer-color;
  }
}

@media screen and (max-width: 1100px) {
  .card {
    &-grid {
      padding: 0 6%;
    }
  }
}

@media screen and (max-width: 750px) {
  .card {
    &-grid {
      padding: 0 3%;
    }
  }
}
</style>
