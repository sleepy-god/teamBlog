<template>
  <div id="linked">
    <div class="top-img" ref="top">
      <span>{{title}}</span>
    </div>
    <shadow-model class="link-shadow">
      <div class="link-main" v-for="(link, index) in links" :key="index">
        <a :href="link.url">
          <el-tooltip class="item" effect="dark" :content="link.detail" placement="top">
            <div class="link-name">{{link.name}}</div>
          </el-tooltip>
        </a>
      </div>
    </shadow-model>
  </div>
</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";

  export default {
    name: "Linked",
    components: {
      ShadowModel
    },
    data() {
      return {
        title: "Linked",
        links: [
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'},
          {name: '幻尘の屋', url: 'http://www.sleepygod.xyz', detail: '星雪工作室初创博客'}
        ],
        post: ""
      }
    }
  }
</script>

<style scoped>
  #linked .top-img {
    height: 350px;
    width: 100%;
    background-image: url("https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg");
    position: relative;
    margin-bottom: 1rem;
    background-color: #49b1f5;
    background-attachment: local;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  #linked .top-img span {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    position: absolute;
    top: 45%;
  }

  .link-shadow {
    margin: 15px;
    min-height: 50vh;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .link-main {
    width: 20%;
    height: 2rem;
    margin: 50px;
    /*display: flex;*/
    /*justify-content: space-around;*/
    /*align-items: center;*/
  }

  .link-name {
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
    transition: all 0.2s ease-in;
  }

  a {
    width: 100%;
    text-align: center;
  }

  a {color: black}
  .link-name:hover{color: #49b1f5; font-size: 32px}
  .link-name:active{color: #ff7242}
</style>
