<template>
  <div id="cate-detail">
    <div class="cate-title">
      <span>{{cateItem.name}}</span>
    </div>
    <div class="cate-count">
      <span>共有文章：{{cateItem.artIds.length}}篇</span>
    </div>
    <div class="cate-info">
          <el-card class="info-item" :body-style="{ padding: '0px' }"  v-for="(item, index) in arts" :key="index" >
            <img :src="item.imgUrl" class="image">
            <div style="padding: 14px;">
              <span>
                <a href="#" @click="articleClick(index)">
                  {{item.title}}
                </a>
              </span>
              <div class="bottom clearfix">
                <time class="time">{{item.date}}</time>
              </div>
            </div>
          </el-card>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "CateDetail",
    props: {
      cateItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        arts: []
      }
    },
    created() {
      //加载分类中文章信息
      this.loadCate()
    },
    methods: {
      ...mapActions(['getArticle']),
      loadCate() {
        this.getArticle(this.cateItem.artIds).then(res => {
          this.arts = res
        })
      },
      articleClick(index) {
        this.$router.push('/article/'+this.cateItem.artIds[index]);
      }
    }
  }
</script>

<style scoped>
  #cate-detail {
    width: 100%;
    height: 100%;
  }
  #cate-detail .cate-title {
    position: absolute;
    left: 45%;
    top: 45px;
  }
  #cate-detail .cate-title span {
    font-size: 36px;
    font-weight: 600;
  }

  #cate-detail:hover .cate-title span {
    color: #49b1f5;
  }

  #cate-detail .cate-count{
    position: absolute;
    top: 100px;
    left: 43%;
  }

  #cate-detail .cate-count span {
    font-size: 14px;
    text-align: center;
  }

  #cate-detail .cate-info {
    position: absolute;
    top: 140px;
    padding-left: 7%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .info-item {
    width: 200px;
    margin: 15px;
  }


  a:hover {
    color: #49b1f5;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  .image {
    width: 200px;
    height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>