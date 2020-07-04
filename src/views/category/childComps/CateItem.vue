<template>
  <div id="cate-item">
    <div class="item-img">
      <img :src="cateItem.imgUrl" alt=""/>
    </div>
    <div class="item-info">
      <span class="item-info__name" @click="itemClick">
         {{cateItem.name}}
      </span>
      <span class="item-info__count">
        文章数量：{{cateItem.artIds.length}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateItem",
    props: {
      cateItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.$emit('itemClick')
      }
    }
  }
</script>

<style scoped>
  #cate-item {
    width: 100%;
    padding: 30px;
    height: 140px;
    display: flex;
    align-items: center;

  }

  #cate-item .item-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  #cate-item .item-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #cate-item .item-info {
    width: 60%;
    margin-left: 30px;
    text-align: left;
  }

  #cate-item .item-info span {
    /*border: 1px solid #000;*/
    overflow: hidden;
  }

  .item-info__name {
    /*line-height: 0.2rem;*/
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
  }

  .item-info__name:hover {
    color: #49b1f5;
  }

  .item-info__count {
    /*margin-left: 50px;*/
    text-align: left;
  }

</style>