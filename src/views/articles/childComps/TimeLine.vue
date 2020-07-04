<template>
  <div class="timeline">
    <div class="block">
      <el-timeline>
        <el-timeline-item class="timeline-item" v-for="(article, index) in this.$store.state.articles.articles" :key="index" placement="top">
          <div class="dot" slot="dot"></div>
          <div class="item-card">
            <div class="item-img">
              <img :src="article.imgUrl" alt="">
            </div>
            <div class="item-info">
              <span class="info-date">
                <i class="el-icon-timer"></i>
                {{article.date}}
              </span>
              <span class="info-title" @click="articleClick(index)">{{article.title}}</span>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TimeLine",
    data() {
      return {
      }
    },
    methods: {
      articleClick(index) {
        this.$router.push('/article/'+this.$store.state.articles.articles[index].id);
      }
    }
  }
</script>

<style scoped>
  .timeline {
    width: 90%;
    margin-top: 15px;
    position: relative;
  }

  .timeline-item {
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
  }

  .timeline-item .item-card {
    height: 150px;
    width: 120%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }

  .timeline-item .item-card .item-img{
    width: 7rem;
    height: 7rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-card  .item-img img {
    width: 5rem;
    height: 5rem;
    /*transition: all 0.5s;*/
  }

  .item-card .item-img img:hover {
    width: 7rem;
    height: 7rem;
    transition: all 0.8s;

  }


  .timeline-item .item-info {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 5%;
  }

  .timeline-item .item-info .info-title {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s;
    transform: translateX(0);
  }

  .timeline-item .item-info .info-title:hover {
    color: #49b1f5;
    transition: all 0.5s;
    transform: translateX(20px);
    /*animation: header 1s 1;*/
  }

  .timeline-item .dot {
    border: 5px solid rgba(78, 151, 255, 1);
    border-radius: 50%;
    background-clip: content-box;
    background: #fff;
    width: 15px;
    height: 15px;
    position: absolute;
    left: -2px;
  }

  .timeline-item:hover .dot {
    border: 5px solid #ff7242;
    background-clip: content-box;
    background-color: #fff;
    left: -2px;
    width: 15px;
    height: 15px;
  }


  @keyframes header {
    /*0% {*/
    /*  opacity: 0;*/
    /*  -webkit-transform: translateY(0);*/
    /*  transform: translate(0);*/
    /*}*/
    100% {
      opacity: 1;
      -webkit-transform: translateX(20px);
      transform: translateX(20px);
    }
  }
</style>