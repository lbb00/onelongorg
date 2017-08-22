<template>
  <!-- sns -->
  <div class="card">
    <div class="card-grid">
      <div class="title">
        <h2>联系我</h2>
      </div>
      <div class="contact">
        <ul>
          <li>
            <a href="http://github.com/loveonelong" target="_blank">
              <h3>GitHub</h3>
              <i class="iconfont icon-github"></i>
              <p>github/loveonelong</p>
            </a>
          </li>
          <li>
            <a href="mailto:love@onelong.org">
              <h3>Email</h3>
              <i class="iconfont icon-email"></i>
              <p>love{AT}onelong.org</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>WeChat</h3>
              <img src="~assets/images/wechat.jpg" alt="onelong的微信订阅号">
              <p>订阅号/onelong</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
@import "~assets/font/iconfont.less";
@import "~assets/style/base.less";
.contact {
  margin-top: 30px;
  width: 1100px;
  padding-top: 30px;
  margin: 0 auto;
  li {
    float: left;
    display: block;
    width: 33.3333333%;
    padding: 0 2%;
  }
  a {
    display: block;
    width: 100%;
    border: 1px solid #eee;
    background: #fcfcfc;
    text-align: center;
    padding: 10px 20px 15px 20px;
    &:hover {
      border-color: @a-hover-color-light;
    }
  }
  h3 {
    margin: 5px 0;
    font-size: 16px;
    font-weight: 500;
  }
  i {
    display: block;
    margin: 20px 0;
    font-size: 80px;
  }
  img {
    margin: 20px 0;
    width: 80px;
    height: 80px;
  }
  p {
    display: block;
  }
  &:after {
    display: table;
    clear: both;
    content: "";
  }
}

@media screen and (max-width: 1100px) {
  .contact {
    width: 100%;
  }
}

@media screen and (max-width: 750px) {
  .contact {
    width: 100%;
    li {
      width: 100%;
      padding-top: 30px;
    }
  }
}
</style>