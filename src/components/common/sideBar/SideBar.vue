<template>
  <transition name="side">
    <div class="side-bar hidden-sm-and-down">
      <slot></slot>
      <span class="bar-title">目录</span>
      <div class="catalog">
        <el-tree :data="data"></el-tree>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "SideBar",
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        // data: [
        //   {
        //     label: '1 Vue学习笔记 1',
        //     children: [
        //       {
        //         label: '1.1 虚拟DOM',
        //         children: [
        //         ]
        //       },
        //       {
        //         label: '1.2 VNode',
        //         children: [
        //           {
        //             label: '1.2.3 注释节点'
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ]
      }
    }
  }
</script>

<style scoped>
  .side-active {
    transition: all .3s ease;
  }
  .side-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .side-enter, .side-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-250px);
    opacity: 0;
  }

  .side-bar {
    width: 250px;
    height: 100vh;
    min-height: 100vh;
    background-color: #f7f9fa;
    z-index: 100;
    position: fixed;
    left: 0;
    overflow: hidden;
  }

  .bar-title {
    position: absolute;
    top: 70px;
    left: 40%;
    font-size: 24px;
  }

  .side-bar:hover .bar-title {
    color: #66b1ff;
  }

  .el-tree {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f7f9fa;
  }

  .catalog {
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 85vh;
    padding: 5px;
  }

  .catalog span {
    text-align: left;
  }
</style>