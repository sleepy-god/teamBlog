<template>
  <div id="articles">
    <div class="top-img">
      <span>文章时间线</span>
    </div>
    <el-row>
      <el-col :lg="{span: 12, offset: 3, push: 0}" :sm="{span:12, offset: 0, push: 4}" :xs="{span: 24, offset: 0}">
          <shadow-model class="timeline-model">
            <div class="timeline-title">我的文章</div>
            <time-line />
          </shadow-model>
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
  import Aside from "@/components/content/aside/Aside";
  import TimeLine from "./childComps/TimeLine";
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  export default {
    name: "Articles",
    components: {
      Aside,
      TimeLine,
      ShadowModel
    }
  }
</script>

<style scoped>
  #articles {
    width: 100%;
    min-height: 100vh;
  }

  #articles .top-img {
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

  #articles .top-img span {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    position: absolute;
    top: 45%;
  }

  .timeline-model {
    margin-top: 50px;
    height: 100%;
    padding: 70px 50px;
    position: relative;
  }

  .timeline-model .timeline-title {
    position: absolute;
    top: 2%;
    left: 6%;
    font-size: 16px;
    font-weight: 600;
  }
</style>