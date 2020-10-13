<template>
  <div id="tags">
    <div class="top-img" ref="top">
      <span>{{title}}</span>
    </div>
    <el-row>
      <el-col class="shadow-col" :lg="{span: 12, offset: 3, push: 0}" :sm="{span:12, offset: 0, push: 4}" :xs="{span: 24, offset: 0}">
        <div v-if="showTags">
          <shadow-model class="tags-shadow">
            <div v-for="(tag, index) in tags"
                 :key="index"
                 class="tag" @click="tagClick(index)">
              <el-tag :type="types[randType]">
                {{tag.name}}
              </el-tag>
            </div>
          </shadow-model>
        </div>
        <div v-else>
          <shadow-model class="detail-model">
            <a href="javascript:void(0)" @click="backToAll">
              <i style="font-size: 24px; font-weight: 600"  class="el-icon-back"></i>
            </a>
            <tag-detail :tag-item="currentTag" />
          </shadow-model>
        </div>
      </el-col>
      <el-col :xl="{span: 5, push: 0}" :lg="{span: 7, push: 0}" :sm="{span: 8, push: 4}" :xs="{span: 24, offset: 0}">
        <div id="aside">
          <Aside/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  import Aside from "@/components/content/aside/Aside";
  import TagDetail from "./childComps/TagDetail";
  import {getTags} from "@/network/articles";

  export default {
    name: "Tags",
    components: {
      ShadowModel,
      Aside,
      TagDetail
    },
    data() {
      return {
        title: "Tags",
        tags: [],
        types: [
          '',
          'success',
          'warning',
          'danger'
        ],
        currentTag: {},
        showTags: true
      }
    },
    computed: {
      randType() {
        let length = this.tags.length - 1;
        let num = Math.floor(Math.random() * length + 0);
        return num
      }
    },
    mounted(){
      this.getTag();
    },
    methods: {
      getTag() {
        getTags().then(res => {
          this.tags = res.data.tags
        })
      },
      tagClick(index) {
        this.currentTag = this.tags[index];
        this.showTags = false
      },
      backToAll() {
        this.currentTag = null;
        this.showTags = true
      }
    }
  }
</script>

<style scoped>
  #tags {
  }

  #tags .top-img {
    height: 350px;
    width: 100%;
    background-image: url("https://s1.ax1x.com/2020/06/20/NQl0HJ.jpg");
    position: relative;
    margin-bottom: 1rem;
    background-color: #49b1f5;
    background-attachment: local;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  #tags .top-img span {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    position: absolute;
    top: 45%;
  }

  .tags-shadow {
    min-height: 60vh;
    margin: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 15px;
  }

  .tag {
    margin: 1%;
    cursor: pointer;
  }
  .tag el-tag {
    transition: all 0.2s;
  }

  .tag:hover .el-tag{
    box-shadow:2px 2px 2px rgba(0, 0, 0, .20);
    color: #ff7242;
  }

  .shadow-col {
    margin-top: 3rem;
  }
  .detail-model {
    position: relative;
    min-height: 200vh;
    margin: 15px;
    /*overflow: hidden;*/
  }

  a {
    position: absolute;
    top: 40px;
    left: 20px;
  }

  a:hover> i {
    color: #ff7242;
  }
</style>