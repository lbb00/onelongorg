<template>
  <!-- page screen -->
  <div class="pagescreen">
    <div class="pagescreen-content">
      <div class="profile-photo">
        <img src="../../assets/images/profile-photo.jpg" alt="onelong">
      </div>
      <p>我挥舞着键盘和本子，</p>
      <p>发誓要把世界写个明明白白。</p>
      <div class="pagescreen-sns">
        <a href="http://github.com/loveonelong" target="_blank">
          <i class="iconfont icon-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../../assets/style/base.less";
.pagescreen {
  width: 100%;
  height: 300px;
  background: @main-color;
  color: #fff;
  text-align: center;
  &-content {
    padding: 0 30px;
    padding-top: 30px;
  }
  &-sns {
    width: 100%;
    text-align: center;
    a {
      margin: 0 10px;
      color: #555;
      &:hover {
        color: #fff;
      }
      i {
        font-size: 30px;
      }
    }
  }
  .profile-photo {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 120px;
    text-align: center;
    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: 100px;
      border-radius: 100px;
      background: @main-color-light;
      transition: ease .4s;
      &:hover {
        top: 0px;
        left: 0px;
        width: 120px;
        height: 120px;
        border-radius: 120px;
      }
    }
  }
  p {
    font-size: 20px;
    margin: 1em 0;
  }
}
</style>