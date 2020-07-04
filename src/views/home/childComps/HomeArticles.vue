<template>
  <div id="home-articles">
    <div class="article-list">
      <div class="article-item" v-for="(article, index) in articles" :key="index">
        <shadow-model class="shadow-model" v-if="index >= pageSize*(currentPage - 1) && index < pageSize*currentPage">
          <div class="article-img">
            <img :src="article.imgUrl" alt="">
          </div>
          <div class="article-info">
            <div class="article-title" @click="articleClick(index)">
              <a href="javascript:void(0)">
                {{article.title}}
              </a>
              <span class="article-type"><br>作者：{{article.author}}</span>
            </div>
            <div class="date"><i class="el-icon-date"></i>{{article.date}}</div>
            <div class="article-brief">{{article.brief}}</div>
          </div>
        </shadow-model>
      </div>
    </div>
  </div>

</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";

  export default {
    name: "HomeArticles",
    components: {
      ShadowModel
    },
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      }
    },
    computed: {
      articles() {
        let arr = JSON.parse(JSON.stringify(this.$store.state.articles.articles)) ;
        return arr.reverse()
      }
    },
    methods: {
      articleClick(index) {
        this.$router.push('/article/'+ this.articles[index].id);
      }
    }
  }
</script>

<style scoped>
  #home-articles {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -moz-box-align: start;
    -o-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1200px;
  }

  .article-list {
    margin-top: 20px;
  }


  .shadow-model .article-img {
    width: 20%;
    transition: all 0.6s;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 8px;
  }

  .shadow-model .article-img img {
    width: 80%;
    height: 80%;
    border-radius: 7px;
  }

  .shadow-model:hover .article-img {
    width: 30%;
  }


  .shadow-model:hover .article-img img {
    width: 90%;
    height: 90%;
  }

  .article-info {
    display: inline-block;
    overflow: hidden;
    padding: 0 40px;
    width: 55%;
  }

  .article-info .article-title {
    display: -webkit-box;
    /*overflow: hidden;*/
    margin-bottom: 0.3rem;
    color: #2e2e2e;
    text-decoration: none;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    word-wrap: break-word;
    font-size: 1.2rem;
    line-height: 1.4;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
  }

  .article-info> .article-title:hover {
    color: #49b1f5 !important;
  }

  .article-title> a {
    font-size: 24px;
    display:block;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .article-title> a:hover {
    color: #49b1f5 !important;
  }

  .article-info .date {
    margin-top: 0.7rem;
    text-align: left;
    color: #858585;
  }

  .article-title>span {
    font-size: 14px;
    color: red !important;
  }

  .article-info .article-brief {
    text-align: left;
    font-size: 16px;
    display: -webkit-box;
    overflow: hidden;
    margin-top: 0.7rem;
    word-break: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow : ellipsis;
  }

</style>