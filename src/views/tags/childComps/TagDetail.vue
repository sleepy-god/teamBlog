<template>
  <div id="tag-detail">
    <div class="tag-title">
      <span>{{tagItem.name}}</span>
    </div>
    <div class="tag-count">
      <span>共有文章：{{tagItem.artIds.length}}篇</span>
    </div>
    <div class="tag-info">
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
    name: "TagDetail",
    props: {
      tagItem: {
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
        this.getArticle(this.tagItem.artIds).then(res => {
          this.arts = res
        })
      },
      articleClick(index) {
        this.$router.push('/article/'+this.tagItem.artIds[index]);
      }
    }
  }
</script>

<style scoped>
  #tag-detail {
    width: 100%;
    height: 100%;
  }
  #tag-detail .tag-title {
    position: absolute;
    left: 45%;
    top: 45px;
  }
  #tag-detail .tag-title span {
    font-size: 36px;
    font-weight: 600;
  }

  #tag-detail:hover .tag-title span {
    color: #49b1f5;
  }

  #tag-detail .tag-count{
    position: absolute;
    top: 100px;
    left: 43%;
  }

  #tag-detail .tag-count span {
    font-size: 14px;
    text-align: center;
  }

  #tag-detail .tag-info {
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