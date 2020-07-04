<template>
  <div id="aside-item">
    <shadow-model class="shadow-model card-widge" :style="{height: height + 'vh'}">
      <slot></slot>
    </shadow-model>
  </div>
</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  export default {
    name: "AsideItem",
    components: {
      ShadowModel
    },
    props: {
      height: {
        type: Number,
        default: 50
      }
    }
  }
</script>

<style scoped>
  #aside-item {
    padding: 20px 30px;
    margin: 10px;
    /*overflow: hidden;*/
  }

  .card-widge {

    overflow: hidden;
    border-radius: 8px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>