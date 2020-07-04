<template>
  <div id="article-list">
    <div class="list-title">
      <i class="el-icon-document title-item"></i>
      <span class="title-item">最近文章</span>
    </div>
    <div class="content-list">
      <div class="content-item" v-for="(article, index) in articles" v-if="index < 5" :key="index">
        <div class="content-img">
          <img :src="article.imgUrl" alt="">
        </div>
        <div class="content-info">
          <a href="#" @click="articleClick(index)" class="content-title">
            <span>{{article.title}}</span>
          </a>
          <span>{{article.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleList",
    computed: {
      articles() {
        let arr = JSON.parse(JSON.stringify(this.$store.state.articles.articles)) ;
        return arr.reverse()
      }
    },
    methods: {
      articleClick(index) {
        this.$router.push('/article/'+this.articles[index].id);
      }
    }
  }
</script>

<style scoped>
#article-list {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 25px;
}

  .list-title {
    position: absolute;
    top: 5%;
    left: 5%;
  }

  #article-list .list-title .title-item {
    margin-left: 10px;
    font-size: 18px;
  }

  #article-list .content-list {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    position: absolute;
    top: 12%;
    left: 15%;
  }

  .content-list .content-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.2rem;
  }

  .content-item .content-img {
    width: 25%;
  }

  .content-img img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }

  .content-item .content-info {
    margin-left: 5%;
    width: 50%;
    height: 10vh;
    overflow: hidden;
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .content-info a span {
    display:block;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content-item .content-info .content-title:hover {
    color: #66b1ff;
  }

</style>