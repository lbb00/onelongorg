<template>
  <div class="project">
    <div class="github">
      <a href="https://github.com/loveonelong" target="_bank">
        <i class="iconfont icon-github"></i>github.com/loveonelong</a>
    </div>
    <div class="timeline-wrap">
      <!-- timeline top -->
      <div class="timeline-top">
        <span>项目轴</span>
      </div>
      <!-- timeline box -->
      <div class="timeline-box">
        <ul>
          <li v-for="item in items" :key="item.id">
            <div class="timeline-item">
              <span class="timeline-point timeline-point-0"></span>
              <span class="timeline-point timeline-point-1"></span>
              <span class="timeline-item-time">{{item.updateTime}}</span>
              <div class="timeline-item-title">
                <p>{{item.title}}</p>
              </div>
              <a class="timeline-item-box" :href="item.mainHref" target="_blank">
                <img :src="item.imgsrc" :alt="item.imgalt">
                <div class="timeline-item-box-text">
                  <div class="timeline-item-box-text-wrap">
                    <p>{{item.summary}}</p>
                    <p>Tag：{{item.tag}}</p>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
  
      <!-- timeline bottom -->
      <div class="timeline-bottom"></div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  name: 'project',
  mixins: [mixin],
  data () {
    return {
      items: [
        {
          mainHref: 'https://onecss.onelong.org',
          updateTime: 'null',
          title: 'ONECSS',
          imgsrc: '/static/project-logo/onecss-logo.png',
          imgalt: 'logo',
          summary: '移动响应优先的纯css框架，实现了栅格布局和一些常用的组件样式。',
          tag: 'CSS，FONT-END'
        },
        {
          mainHref: 'https://github.com/loveonelong/qqtools',
          updateTime: 'null',
          title: 'QQ工具',
          imgsrc: '/static/project-logo/qqtools-logo.png',
          imgalt: 'logo',
          summary: '用按键精灵手机助手开发的QQ工具(安卓）,可以自动赞附近的人，和给赞过你的人回赞。',
          tag: 'vbs，android，按键精灵'
        }
      ]
    }
  }
}

</script>

<style lang="less">
@import '../../assets/font/iconfont.less';
@import '../../assets/style/base.less';
@timeline-line-color: #555;
@timeline-item-box-bgcolor: #f5f5f5;
@timeline-item-hover-bordercolor: @main-color;
.project {
  width: 100%;
  padding: 50px 0;
  background: #fff;
  .github {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    height: 60px;
    padding: 5px 0;
    a {
      display: inline-block;
      padding: 5px 50px;
      font-size: 18px;

      i {
        font-size: 40px;
        margin-right: 10px;
      }
    }
  }
}

.timeline {
  &-wrap {
    width: 920px;
    margin: 0 auto;
    padding-top: 30px;
    padding-left: 100px;
  }

  /* item */
  &-item {
    position: relative;
    width: 120px;
    height: 300px;
    border-top: 3px solid @timeline-line-color;
    border-left: 10px solid @timeline-line-color;
    &-time {
      font-weight: 400;
      line-height: 100%;
      position: absolute;
      top: -10px;
      right: 140px;
      color: @timeline-line-color;
    }
    &-title {
      font-size: 18px;
      font-weight: 400;
      line-height: 100%;
      position: absolute;
      top: -10px;
      left: 150px;
      color: @main-color;
      white-space: nowrap;
    }
    &-box {
      position: absolute;
      top: 30px;
      left: 150px;
      display: block;
      width: 700px;
      padding: 10px;
      border: 1px solid #eee;
      background: @timeline-item-box-bgcolor;
      transition: ease .4s;
      &:hover {
        border: 1px solid @timeline-item-hover-bordercolor;
      }
      img {
        display: block;
        float: left;
        width: 300px;
        height: 200px;
        border: none;
        outline: none;
        border-radius: 10px;
        background: #fafafa;
      }
      &-text {
        font-size: 14px;
        line-height: 1.5;
        display: -webkit-flex;
        display: flex;
        float: left;
        width: 370px;
        height: 200px;
        padding-left: 30px;
        color: #777;
        -webkit-align-items: center;
        align-items: center;
        p {
          margin: 1em 0;
        }
      }
    }
  }
  &-point {
    position: absolute;
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    &-0 {
      top: -9px;
      left: -12px;
      border: 2px solid @timeline-line-color;
      background: #fff;
    }
    &-1 {
      top: -9px;
      right: -14px;
      background: @timeline-line-color;
    }
  }

  /* top,bottom */
  &-top,
  &-bottom {
    width: 10px;
    background: @timeline-line-color;
  }
  &-top {
    position: relative;
    height: 80px;
    border-radius: 5px 5px 0 0;
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      position: absolute;
      right: 20px;
      white-space: nowrap;
      color: @timeline-line-color;
    }
  }
  &-bottom {
    height: 15px;
    border-radius: 0 0 5px 5px;
  }
}
</style>