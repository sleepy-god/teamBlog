<template>
  <transition name="bar">
    <div class="nav-bar"  v-show="showNav"  :class="{'active': hasBack}" >
      <div class="bar-item hidden-xs-only">
        <a href="#/about" class="site-page">
          <i class="el-icon-s-promotion"></i>
          <span>About</span>
        </a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/linked" class="site-page">
          <i class="el-icon-link"></i>
          <span>链接</span>
        </a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/addArticle" class="site-page">
          <i class="el-icon-document-add"></i>
          <span>发布博客</span>
        </a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/category" class="site-page">
          <i class="el-icon-menu"></i>
          <span>分类</span>
        </a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/tags" class="site-page">
          <i class="el-icon-price-tag"></i>
          <span>标签</span></a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/articles" class="site-page">
          <i class="el-icon-reading"></i>
          <span>文章</span>
        </a>
      </div>
      <div class="bar-item hidden-xs-only">
        <a href="#/home" class="site-page">
          <i class="el-icon-s-home"></i>
          <span>主页</span>
        </a>
      </div>
      <div class="bar-item hidden-sm-and-up">
        <a href="javascript:void(0);" @click="showMobile" class="site-page">
          <i class="el-icon-s-unfold"></i>
        </a>
      </div>
      <div class="bar-item login hidden-xs-only" v-show="!showUser">
        <a href="#/login" class="site-page">
          <span>登录</span>
        </a>
      </div>
      <div class="bar-item reg hidden-xs-only" v-show="!showUser">
        <a href="#/register" class="site-page">
          <span>注册</span>
        </a>
      </div>
      <div class="bar-item name" v-show="showUser">
          <span>{{username}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
  import {throttle} from "@/common/until";
  export default {
    name: "NavBar",
    props: {
      username: {
        type: String,
        default: ''
      },
      showUser: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        showNav: true,
        hasBack: false
      }
    },
    mounted() {
      window.addEventListener('scroll', throttle(this.scrollHandel, 300) )
    },
    methods: {
      showMobile() {
        this.$emit('showMobile')
      },
      scrollHandel(e) {
        let top = e.srcElement.scrollingElement.scrollTop;
        if(top - this.location > 0) {
          this.showNav = false;
          this.hasBack = false
        } else  {
          this.showNav = true;
          this.hasBack = true
        }

        if(top === 0) {
          this.hasBack = false
        }
        this.location = top;
      }
    }
  }
</script>

<style scoped>

  .bar-enter-active, .bar-leave-active {
    transition: all .3s ease;
  }
  .bar-enter, .bar-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-50px);
    height: 0;
    opacity: 0;
  }
  .nav-bar {
    line-height: 50px;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1000;
    /*transition: all 0.2s linear;*/

    padding: 0 36px;
    width: 100%;
    height: 58px;
    border: none;
    font-size: 18px;
  }


  .active>.bar-item a {
    color: #3b3a3a;
    text-shadow: none;
    font-weight: 600;
  }

  .active {
    box-shadow: 6px 6px 6px rgba(0, 0, 0, .20), 8px 8px 8px rgba(0, 0, 0, .20);
    opacity: 1;
    background: rgba(255,255,255,0.8);
    /*transition: all 3s ease-in;*/

    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -ms-transition: all 0.5s;
    transition: all 0.5s;
    height: 7%;
  }

  .active> .name {
    color: black;
    margin-top: 0;
  }

  .active> .name span {

    font-size: 24px;
    color: #000;
  }

  .active:hover a {
    color: #3b3a3a;
    text-shadow: none;
  }

  .bar-item {
    position: relative;
    float: right;
    margin: 0 auto;
    margin-right: 1rem;
    display: inline-block;
    padding: 0 0 0 0.7rem;
  }

  .bar-item > a:hover::after {
    width: 100%;
  }

  .bar-item > a::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    width: 0px;
    height: 3px;
    background-color: rgb(128, 200, 248);
    content: "";
    transition: all 0.3s ease-in-out 0s;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }


  .site-page {
    position: relative;
    padding-bottom: 0.3rem;
    text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
    font-size: 0.7rem;
    cursor: pointer;

  }

  a {
    color: #eee;
    text-decoration: none;
    transition: all 0.2s;
    background-color: transparent;
  }

  .name {
    float: left;
    margin-top: 10px;
  }

  .name span {
    color: #fff;
    font-size: 36px;
    font-family: '华文行楷';
  }
  .name span:hover {
    color: #49b1f5;
  }

  a span {
    font-size: 16px;
  }

  a:hover {
    color: #fff;
  }

  a:hover span {
    color: rgb(128, 200, 248);
  }

  a:hover i {
    color: rgb(128, 200, 248);
  }

  .bar-item:hover {
    color: cornflowerblue;
  }

  i:before{
    width: 40px;
    height: 40px;
  }

  i{
    font-size: 16px;
    margin-right: 5px;
  }

  .login, .reg {
    float: left;
  }

  .el-icon-s-unfold {
    font-size: 24px;
  }

</style>