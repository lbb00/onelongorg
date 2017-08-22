<template>
  <!-- works -->
  <div class="card">
    <div class="card-grid">
      <div class="title">
        <h2>傲娇的展示作品</h2>
        <p>引以为豪，(づ￣ 3￣)づ。</p>
      </div>
      <div class="card-project">
        <ul>
          <li v-for="item in items" :key="item.id">
            <a :href="item.mainhref">
              <img :src="item.imgsrc" :alt="item.alt">
              <div class="textbox">
                <p class="textbox-title">{{item.title}}</p>
                <p class="textbox-text">{{item.text}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <router-link to="/projects" class="more">
        查看更多项目
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-project',
  data () {
    return {
      items: [
        {
          mainhref: 'https://onecss.onelong.org',
          imgsrc: '/static/project-logo/onecss-logo.png',
          imgalt: '移动响应优先的CSS框架',
          title: 'ONECSS',
          text: '移动响应优先的CSS框架'
        },
        {
          mainhref: 'https://github.com/loveonelong/qqtools',
          imgsrc: '/static/project-logo/qqtools-logo.png',
          imgalt: 'qq自动点赞，回赞器',
          title: 'QQ工具',
          text: 'qq自动点赞，回赞器'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '~assets/style/base.less';
.card-project {
  width: 1100px;
  padding: 10px 0;
  margin: 0 auto;
  overflow: hidden;
  clear: both;
  li {
    display: block;
    width: 33.3333333%;
    float: left;
    margin-top: 30px;
    padding: 0 1%;
    a {
      width: 100%;
      display: block;
      background: #fff;
      color: #555;
    }
    img {
      width: 100%;
      height: 220px;
      background: #eee;
    }
    .textbox {
      width: 100%;
      height: 50px;
      padding: 7px 8px;
      overflow: hidden;
      &-title {
        font-size: 16px;
        line-height: 16px;
      }
      &-text {
        font-size: 12px;
        line-height: 12px;
        margin-top: 8px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .card-project {
    width: 100%;
    li {
      width: 50%;
      padding: 1.5%;
    }
  }
}

@media screen and (max-width: 750px) {
  .card-project {
    width: 100%;
    li {
      width: 100%;
      padding: 1.5%;
    }
  }
}
</style>