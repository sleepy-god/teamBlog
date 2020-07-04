<template>
  <div class="shadow-model">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ShadowModel"
  }
</script>

<style scoped>
 .shadow-model {
   display: -webkit-box;
   display: -moz-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   /*display: box;*/
   display: flex;
   -webkit-box-orient: horizontal;
   -moz-box-orient: horizontal;
   -o-box-orient: horizontal;
   -webkit-flex-direction: row;
   -ms-flex-direction: row;
   flex-direction: row;
   -webkit-box-align: center;
   -moz-box-align: center;
   -o-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;
   margin-top: 20px;
   padding: 0;
   height: 280px;
   border-radius: 8px;
   background: #fff;
   -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
   box-shadow: 4px 4px 8px 6px rgba(7,17,27,0.06);
   -webkit-transition: all 0.3s;
   -moz-transition: all 0.3s;
   -o-transition: all 0.3s;
   -ms-transition: all 0.3s;
   transition: all 0.3s;
   overflow: hidden;
 }

 .shadow-model:hover {
   box-shadow:6px 6px 6px 6px rgba(0, 0, 0, .20), 8px 8px 8px 8px rgba(0, 0, 0, .20);
 }

</style>