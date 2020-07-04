<template>
  <div id="category">
      <div class="top-img" ref="top">
        <span>Category</span>
      </div>
      <el-row>
        <el-col class="shadow-col" :lg="{span: 12, offset: 3, push: 0}" :sm="{span:12, offset: 0, push: 4}" :xs="{span: 24, offset: 0}">
          <div  v-if="showCates">
            <shadow-model class="cate-model" v-for="(item, index) in cate" :key="index">
              <cate-item :cate-item="item" @itemClick="itemClick(index)"/>
            </shadow-model>
          </div>
          <div v-else>
            <shadow-model class="detail-model">
              <a href="javascript:void(0)" @click="backToAll">
                <i style="font-size: 24px; font-weight: 600"  class="el-icon-back"></i>
              </a>
              <cate-detail :cate-item="cateItem" />
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
  import CateItem from "./childComps/CateItem";
  import CateDetail from "./childComps/CateDetail";
  import {getCates} from "@/network/articles";

  export default {
    name: "Category",
    components: {
      ShadowModel,
      Aside,
      CateItem,
      CateDetail
    },
    data() {
      return {
        cate: [
        ],
        cateItem: null,
        showCates: true
      }
    },
    mounted() {
      this.getCates()
    },
    methods: {
      getCates() {
        getCates().then(res => {
          this.cate = res.data.cate

        })
      },
      itemClick(index) {
        this.cateItem = this.cate[index];
        this.showCates = false;
        this.scrollBack()
      },
      backToAll() {
        this.cateItem = null;
        this.showCates = true;
        this.scrollBack()
      },
      scrollBack() {
        window.scrollTo({
          top: 400,
          behavior: "smooth"
        });
      }
    }
  }
</script>

<style scoped>
  #category {
    min-height: 100vh;
  }
  #category .top-img {
    height: 450px;
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

  #category .top-img span {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    position: absolute;
    top: 45%;
  }

  .cate-model {
    /*margin-top: 20px;*/
    height: 100%;
    margin: 20px;
  }

  .detail-model {
    position: relative;
    min-height: 200vh;
    margin: 15px;
    height: 100%;
    /*overflow: hidden;*/
  }
  .shadow-col {
    padding-top: 40px;
    position: relative;
  }
  a {
    position: absolute;
    top: 25px;
    left: 20px;
  }

  a:hover> i {
    color: #ff7242;
  }

</style>