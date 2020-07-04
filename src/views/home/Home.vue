<template>
  <div id="home">
    <nav id="nav">
      <full-page @scrollDown="scrollDown" />
    </nav>
    <el-row ref="main">
      <el-col :lg="{span: 12, offset: 3, push: 0}" :sm="{span:12, offset: -3, push: 4}" :xs="{span: 24, offset: 0}">
        <main id="content-outer">
          <home-articles :page-size="pageSize" :current-page="currentPage"/>
          <el-pagination

                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  layout="prev, pager, next"
                  :page-size="pageSize"
                  :hide-on-single-page="true"
                  :total="articles.length">
          </el-pagination>
        </main>

      </el-col>
      <el-col :xl="{span: 5, push: 0}" :lg="{span: 7, push: 0}" :sm="{span: 8, push: 4}" :xs="{span: 24, offset: 0}">
        <div id="aside">
          <Aside :articles="articles" />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import FullPage from "@/components/common/fullPage/FullPage";
  import HomeArticles from "./childComps/HomeArticles";
  import Aside from "@/components/content/aside/Aside";

  import {getAritcles} from "@/network/articles";
  import {SAVE_ARTICLES} from "@/store/mutations.type";

  export default {
    name: "Home",
    components: {
      FullPage,
      HomeArticles,
      Aside
    },
    data() {
      return {
        pageSize: 7,
        currentPage: 1
      }
    },
    computed: {
      articles() {
        return this.$store.state.articles.articles
      }
    },
    methods: {
      scrollDown() {
        let top = this.$refs.main.$el.offsetTop;
        window.scrollTo({
          top: top,
          behavior: "smooth"
        });
      },
      handleSizeChange(size) {
        this.pageSize = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      }
    }
  }
</script>

<style scoped>
#content-outer {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  display: block;
}

  #aside {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 auto;
    -ms-flex: 1 auto;
    flex: 1 auto;
    display: block;
    /*margin-top: 20px;*/
  }

  .el-pagination {
    text-align: center;
    margin-top: 5%;
  }
</style>