<template>
  <div class="itsMe">
    <div class="itsMe-wrap">
      <div class="itsMe-content">
        <!-- music 网易云 -->
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=480580003&auto=1&height=66"></iframe>
        <!-- music end-->
        <h1>曹云龙-OneLong</h1>
        <p>Email：love@onelong.org</p>
        <p>男 / 96年 / 河南 / 濮阳职业技术学院-计算机应用</p>
        <p>喜欢造轮子，喜欢二次元。</p>
        <hr>
        <h2>个人经历</h2>
        <p>高中自学C语言，高三时已经拿到NCRE三级网络技术证书</p>
        <hr>
        <h2>实习经历</h2>
        <h3>2016/9-2016/11 腾讯云+校园工作坊 濮阳 团队leader</h3>
        <p></p>
        <h3>2017/7-至今 上海融觉文化传播有限公司 上海 前端开发（vuejs方向）</h3>
        <p></p>
        <hr>
        <h2>证书</h2>
        <p>NCRE三级网络技术</p>
        <p>按键精灵三级开发工程师</p>
        <hr>
        <h2>大学</h2>
        <p>2016/1-2017/6 濮阳职业技术学院GSTeam软件技术交流协会 创始人</p>
        <p>2016/3 全国高职技能大赛移动互联网（安卓） 河南省二等奖</p>
        <p>2016/4 全国大学生计算机设计大赛高职组 河南省二等奖</p>
        <p>2016/10 全国数学建模大赛高职组 河南省三等奖</p>
        <p>2016/11 国家励志奖学金</p>
        <p>2017/3 全国高职技能大赛移动互联网（安卓） 河南省二等奖</p>
        <p>2017/4 蓝桥杯C/C++河南省大学C组 一等奖</p>
        <p>2017/5 蓝桥杯C/C++国赛大学C组 二等奖</p>
        <hr>
        <br>
        <p class="align-center">It's Me</p>
        <p class="align-center">❤</p>
      </div>
    </div>
    <div class="itsMe-snslist">
      <sns-list></sns-list>
    </div>
  </div>
</template>

<script>
import SnsList from '@/components/public/SnsList'
export default {
  components: {
    SnsList
  }
}
</script>

<style lang="less">
@import "~assets/style/base.less";
.itsMe {
  width: 100%;
  &-snslist {
    width: 100%;
    padding-top: 50px;
    .card:nth-child(n) {
      background: #fff;
    }
  }
  &-wrap {
    background: @bg-footer-color;
    width: 100%;
    padding: 30px 0 30px 0;
  }
  &-content {
    padding: 40px 60px;
    border-radius: 5px;
    box-shadow: 0 1px 6px #ccc;
    background: #fff;
    color: #333;
    font-weight: 300;
    width: 900px;
    margin: 0 auto;
    h1 {
      font-size: 28px;
      font-weight: 500;
      margin: 1em 0;
      margin-left: 5px;
    }
    h2 {
      margin: 1em 0;
      font-size: 18px;
      font-weight: 400;
      margin-left: 5px;
    }
    h3 {
      font-size: 16px;
      font-weight: 300;
      margin-left: 15px;
    }
    p {
      font-size: 14px;
      margin: 1em 0;
      margin-left: 15px;
    }
    hr {
      border: none;
      width: 100%;
      font-size: 14px;
      height: 1px;
      background: #ddd;
      margin: 1em 0;
    }
    .align-center {
      text-align: center;
    }
  }
}

@media screen and (max-width: 1100px) {
  .itsMe {
    &-wrap {
      padding: 30px 30px;
    }
    &-content {
      padding: 30px 40px;
      width: 100%;
    }
  }
}
</style>