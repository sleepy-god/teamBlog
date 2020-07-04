<template>
  <div id="notice">
    <div class="notice-icon">
      <i class="el-icon-message-solid"></i>
      <span>公告</span>
    </div>
    <div class="notice-info">
      <span>感谢访问本站，若喜欢请收藏 ^_^</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notice"
  }
</script>

<style scoped>
  #notice {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .notice-icon {
    position: absolute;
    top: 15%;
    left: 5%;
  }

  .el-icon-message-solid {
    color: red;
  }

  .notice-info {
    display: flex;
  }
</style>