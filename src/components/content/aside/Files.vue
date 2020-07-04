<template>
  <div id="files">
    <div class="files-title">
      <i class="el-icon-s-cooperation"></i>
      <span>归档</span>
    </div>
    <div class="files-content">
      <div class="files-item" v-for="(item, index) in date" :key="index">
        <span>{{item.time}}</span>
        <span>{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Files",
    data() {
      return {
        date: [
          {time: '2020年6月', count: 4},
          {time: '2020年5月', count: 6},
          {time: '2020年4月', count: 3}
        ]
      }
    }
  }
</script>

<style scoped>

  #files {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #files .files-title {
    width: 30%;
    position: absolute;
    top: 10%;
    left: 10%;
  }

  #files .files-title span {
    margin-left: 10%;
  }

  #files .files-content {
    padding: 0 10px;
    width: 90%;
    position: absolute;
    top: 30%;
    left: 10%;
    overflow: hidden;

  }

  #files .files-content .files-item {
    margin: 10px 5px;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  #files .files-content .files-item:hover {
    background-color: #49b1f5;
  }
</style>