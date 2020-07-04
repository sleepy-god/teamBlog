<template>
  <footer id="footer">
    <div class="copyright">
      <span>©2019 - 2020 By 星雪工作室</span>
    </div>
    <div class="record">
      <a href="http://beian.miit.gov.cn">
        <img src="http://sleepygod.xyz/img/icp.png" alt="">
      </a>

      <span>蒙ICP备20000691号-1</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "MyFooter"
  }
</script>

<style scoped>
#footer {
  margin-top: 40px;
  position: relative;
  bottom: 0;
  height: 120px;
  width: 100%;
  /*background-color: #49b1f5;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("https://sleepy-god.github.io/snow/%E6%98%9F%E7%A9%BA2.jpg");
  position: relative;
  background-attachment: fixed;
  /*background-attachment: local;*/
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
}

  #footer .record {
    margin-top: 15px;
    display: flex;
    align-items: center;
    /*flex: 1;*/
  }

  #footer .record a img {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
</style>