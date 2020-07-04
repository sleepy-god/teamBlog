<template>
  <nav id="nav" class="full_page">
    <div id="site-info">
      <span>{{nowTime | updatetime}}</span>
    </div>
    <div class="scroll-down" @click="scrollDown">
      <i class="el-icon-arrow-down scroll-down-effects"></i>
    </div>
  </nav>
</template>

<script>
  import moment from 'moment'
  export default {

    name: "FullPage",
    data() {
      return {
        nowTime:new Date()
      }
    },
    methods: {
      scrollDown() {
        this.$emit('scrollDown')
      }
    },
    mounted() {
      let _this=this;
      this.timer=setInterval(()=>{
        _this.nowTime=new Date();
      },1000)
    },
    beforeDestroy() {
      if(this.timer){
        clearInterval(this.timer);
      }
    },
    filters: {
      updatetime(value) {
        return moment(value).format('LTS');
      }
    }
  }
</script>

<style scoped>

  #nav {
    -webkit-animation: header 1s;
    -moz-animation: header 1s;
    -o-animation: header 1s;
    -ms-animation: header 1s;
    animation: header 1s;
  }


  .full_page {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    /*display: box;*/
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 100vh;
    margin-bottom: 1rem;
    width: 100%;

    position: relative;
    background-color: #49b1f5;
    /*background-image: url("https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg");*/
    /*background-image: url("https://sleepy-god.github.io/snow/%E6%98%9F%E7%A9%BA2.jpg");*/
    /*background-image: url("https://t7.baidu.com/it/u=3302732614,2082192138&fm=193");*/
    background-image: url("https://s1.ax1x.com/2020/06/20/NQl0HJ.jpg");
    background-attachment: fixed;
    /*background-attachment: local;*/
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
  }
  #site-info {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 5rem;
  }
  #site-info span {
    background-image: linear-gradient(to bottom right, red , yellow);;
    background-origin: border-box;
    -webkit-background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .scroll-down {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 42px;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
  }

  .scroll-down .el-icon-arrow-down {
    position: absolute;
    color: #fff;
  }

  .scroll-down-effects {
    -webkit-animation: scroll-down-effect 1.5s infinite;
    -moz-animation: scroll-down-effect 1.5s infinite;
    -o-animation: scroll-down-effect 1.5s infinite;
    -ms-animation: scroll-down-effect 1.5s infinite;
    animation: scroll-down-effect 1.5s infinite;
  }

  @keyframes header {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-50px);
      transform: translate(-50px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }


  @-moz-keyframes scroll-down-effect {
    0% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
    50% {
      top: -16px;
      opacity: 1;
      -ms-filter: none;
      filter: none;
    }
    100% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
  }
  @-webkit-keyframes scroll-down-effect {
    0% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
    50% {
      top: -16px;
      opacity: 1;
      -ms-filter: none;
      filter: none;
    }
    100% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
  }
  @-o-keyframes scroll-down-effect {
    0% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
    50% {
      top: -16px;
      opacity: 1;
      -ms-filter: none;
      filter: none;
    }
    100% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
  }
  @keyframes scroll-down-effect {
    0% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
    50% {
      top: -16px;
      opacity: 1;
      -ms-filter: none;
      filter: none;
    }
    100% {
      top: 0;
      opacity: 0.4;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
      filter: alpha(opacity=40);
    }
  }
</style>