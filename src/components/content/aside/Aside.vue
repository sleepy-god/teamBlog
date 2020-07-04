<template>
  <div id="aside">
    <aside-item class="base-info" :height="50" v-if="showCardContent">
      <card-content/>
    </aside-item>
    <aside-item class="notice" :height="13" v-if="showNotice">
      <notice/>
    </aside-item>
    <aside-item :height="65" v-if="showArticles">
      <ArticleList/>
    </aside-item>
    <aside-item :height="30" v-if="showFiles">
      <files />
    </aside-item>
    <aside-item :height="40" v-if="showStatistics">
      <statistics />
    </aside-item>
  </div>
</template>

<script>
  import AsideItem from "./AsideItem";
  import CardContent from "./CardContent";
  import Notice from "./Notice";
  import ArticleList from "./ArticleList";
  import Files from "./Files";
  import Statistics from "./Statistics";

  export default {
    name: "Aside",
    components: {
      AsideItem,
      CardContent,
      Notice,
      ArticleList,
      Files,
      Statistics
    },
    props: {
      teamInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      showCardContent: {
        type: Boolean,
        default: true
      },
      showNotice: {
        type: Boolean,
        default: true
      },
      showArticles: {
        type: Boolean,
        default: true
      },
      showFiles: {
        type: Boolean,
        default: false
      },
      showStatistics: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .notice {
    margin-top: -60px;
  }
</style>