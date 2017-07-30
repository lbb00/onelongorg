<template>
  <div class="header">
    <div class="header-grid">
      <div class="header-nav">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <a href="//blog.onelong.org" target="_blank">博客</a>
          </li>
          <li>
            <router-link to="/projects">项目</router-link>
          </li>
          <li>
            <router-link to="/It'sMe">It'sMe</router-link>
          </li>
        </ul>
        <span class="line line-top"></span>
        <span class="line line-right"></span>
        <span class="line line-bottom"></span>
        <span class="line line-left"></span>
        <span class="love">❤</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabbar'
}
</script>
<style lang="less">
@import "../assets/style/base.less";
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 6px #ccc;
  background: #fff;

  &-grid {
    width: 100%;
    height: 60px;
    padding: 0 10%;

    margin: 0 auto;
  }

  &-nav {
    float: left;
    position: relative;

    height: 100%;
    li {
      float: left;
      position: relative;
      .active:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background: #08BFCD;
        ;
      }
    }
    a {
      display: block;
      padding: 0 15px;

      height: 100%;

      font-size: 16px;
      line-height: 60px;
    }
    .line {
      position: absolute;
      transition: ease .4s;
      background: none;
    }
    .line-top {
      top: 10px;
      right: 200px;

      width: 0px;
      height: 2px;
    }
    .line-right {
      right: 5px;
      bottom: -5%;

      width: 2px;
      height: 0;
    }
    .line-bottom {
      bottom: 10px;
      left: 100%;

      width: 0;
      height: 2px;
    }
    .line-left {
      top: -5%;
      left: -2px;

      width: 2px;
      height: 0;
    }

    .love {
      position: absolute;
      color: #fff;
      right: -116px;
      top: 30px;
      font-size: 1px;
      text-align: center;
      height: 60px;
      transition: ease .6s;
    }
  }
}

@media screen and (min-width: 750px) {
  .header {
    &-nav {
      &:hover {
        .line {
          background: @a-hover-color;
        }
        .line-top {
          right: -10px;
          width: 120%;
        }
        .line-right {
          bottom: 15px;
          height: 30px;
        }
        .line-bottom {
          left: -10px;
          width: 120%;
        }
        .line-left {
          top: 15px;
          height: 30px;
        }
        .love {
          right: -130px;
          top: 16px;
          color: @a-hover-color;
          font-size: 28px;
        }
      }
    }
  }
}
</style>