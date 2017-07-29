<template>
  <!-- footer -->
  <div class="footer">
    <p>Author: <a href="#">onelong</a> OvO</p>
    <p>豫ICP备15005052号-2</p>
    <p class="footer-love"> ❤ I LOVE U ❤ </p>
  </div>
</template>

<style lang="less">
  @import "../assets/style/base.less";
  .footer{
      width: 100%;
      padding: 50px 0 40px 0;
      background: @bg-footer-color;
      text-align: center;
      p{
          color: #888;
          font-size: 14px;
          line-height: 14px;
          margin-bottom: 8px;
      }
      a{
        color: #888;
      }
      &-love{
        color: @main-color !important;
      }
  }
</style>