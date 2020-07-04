<template>
  <div id="html">
    <el-row>
      <el-col :span="10">
        <magic-cube/>
      </el-col>
      <el-col :span="10">
        <shadow-model class="text-model">
          <header>开发团队</header>
          <div>这是一个向上欢乐的团队</div>
          <div>我们互相帮助，互相学习,共同承诺、共同承担。</div>
          <div>我们不只专注个人目标，更关注多名成员共同工作而带来的增值效应。</div>
          <div>携手并进，一齐摸索，我们在这个过程不断付出着，同样也无尽收获着……</div>
        </shadow-model>
      </el-col>
      <el-col :span="4">
        <shadow-model  class="member-model">
          <header class="member-header">团队成员</header>
          <ul>
            <li>任艺增</li>
            <li>赵田鑫</li>
            <li>李东方</li>
            <li>姜超</li>
            <li>赵席军</li>
            <li>张越</li>
          </ul>
        </shadow-model>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  import MagicCube from "@/components/common/magicCube/MagicCube";
  export default {
    name: "About",
    components: {
      ShadowModel,
      MagicCube
    }
  }
</script>

<style scoped>

  /*来个渐变的背景色*/
  #html {
    background: linear-gradient(#29f9f0 0%, #000 80%);
    min-height: 100vh;
  }


  .text-model {
    margin-top: 20%;
    margin-right: 15%;
    height: 500px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .member-model {
    margin-top: 50%;
    margin-right: 15%;
    height: 500px;
    padding: 15px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2rem;
  }

  header {
    font-family: 华文行楷;
    font-size: 36px;
    font-weight: 600;
  }

  .member-header {
    position: absolute;
    top: 10%;
    left: 15%;
  }


</style>