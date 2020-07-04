<template>
  <transition name="r-to-l">
    <div class="mobile-nav-bar">
      <div class="put-button">
        <a href="javascript:void(0);" @click="hideMobile">
          <i class="el-icon-caret-right"></i>
        </a>
      </div>
      <div class="bar-item">
        <a href="#/home" class="site-page">
          <i class="el-icon-s-home"></i>
          <span>主页</span>
        </a>
      </div>
      <div class="bar-item">
        <a href="#/articles" class="site-page">
          <i class="el-icon-reading"></i>
          <span>文章</span>
        </a>
      </div>
      <div class="bar-item">
        <a href="#/tags" class="site-page">
          <i class="el-icon-price-tag"></i>
          <span>标签</span></a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/category" class="site-page">
          <i class="el-icon-menu"></i>
          <span>分类</span>
        </a>
      </div>
      <div class="bar-item">
        <a href="#/linked" class="site-page">
          <i class="el-icon-link"></i>
          <span>链接</span>
        </a>
      </div>
      <div class="bar-item">
        <a href="#/about" class="site-page">
          <i class="el-icon-s-promotion"></i>
          <span>About</span>
        </a>
      </div>

      <div class="bar-item login" v-show="!showUser">
        <a href="#/login" class="site-page">
          <span>登录</span>
        </a>
      </div>
      <div class="bar-item reg" v-show="!showUser">
        <a href="#/register" class="site-page">
          <span>注册</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "MobileNavBar",
    props: {
      showUser: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hideMobile() {
        this.$emit('hideMobile')
      }
    }
  }
</script>

<style scoped>
  .r-to-l-enter-active, .r-to-l-leave-active {
    transition: all .3s ease;
  }
  .r-to-l-enter, .r-to-l-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(50px);
    width: 0;
    opacity: 0;
  }

  .mobile-nav-bar {
    /*line-height: 50px;*/
    background-color: rgba(255, 255, 255, 1);
    z-index: 999;
    /*transition: all 0.2s linear;*/

    /*padding: 0 36px;*/
    width: 30%;
    height: 100vh;
    border: none;
    font-size: 18px;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: fixed;
    right: 0;
  }

  .put-button {
    color: #000;
    position: absolute;
    left: 0;
    top: 45%;
  }

  .bar-item {
    height: 50px;
    /*border-bottom: 1px solid #666666;*/
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 0.7rem;
  }

  .bar-item a {
    text-align: center;
  }

  .bar-item a span {
    text-align: center;
  }

  .bar-item:hover a span, .bar-item:hover a i {
    color: #49b1f5;
  }
</style>