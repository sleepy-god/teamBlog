<template>
  <div id="article">
    <side-bar v-show="sideShow" :data="side">
      <div class="control-button"  v-if="sideShow" @click="sideShow = !sideShow">
        <i class="el-icon-caret-left"></i>
      </div>
    </side-bar>
    <div class="show-button" v-if="!sideShow" @click="sideShow = !sideShow">
      <i class="el-icon-caret-right"></i>
    </div>
      <shadow-model  :class="{'move-left': sideShow}" class="mk-shadow">
        <mavon-editor
                class="md"
                :value="mdContent"
                :subfield="prop.subfield"
                :defaultOpen="prop.defaultOpen"
                :toolbarsFlag="prop.toolbarsFlag"
                :editable="prop.editable"
                :scrollStyle="prop.scrollStyle"
                :ishljs="true"
                :boxShadow="false">
        </mavon-editor>
      </shadow-model>
  </div>

</template>

<script>
  import {getArticle} from "@/network/articles";
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  import SideBar from "@/components/common/sideBar/SideBar";

  export default {
    name: "Article",
    components: {
      ShadowModel,
      SideBar
    },
    created() {
      this.getArticle()
    },
    data() {
      return {
        sideShow: false,
        mdContent: '',
        side: []
      }
    },
    methods: {
      getArticle() {
        let id = this.$route.params.id;
        getArticle(id).then(res => {
          this.mdContent = res.data.article;
          this.getSide();
        })
      },
      getSide() {
        let str = this.mdContent;
        let a = str.split('\n');
        let reg = /^#/
        let b = [];

        for(let index = 0; index < a.length; index ++) {
          if(!reg.test(a[index])) {
            a.splice(index, 1)
            index--;
          }
        }
        let zIndex = 0;
        let oIndex = 0;
        for(let index = 0; index < a.length; index ++) {
          // console.log(a[index].lastIndexOf('#'));
          if(a[index].lastIndexOf('#') === 0) {
            b.push({label: a[index].replace('#  ',''), children: []})
            zIndex = index;
            oIndex = 0
          }
          else if(a[index].lastIndexOf('##') === 0) {
            b[zIndex].children.push({label: a[index].replace('##  ',''), children: []});
            oIndex = b[zIndex].children.length - 1
          }
          else if(a[index].lastIndexOf('###') === 0) {
            b[zIndex].children[oIndex].children.push({label: a[index].replace('###  ',''), children: []})
          }
        }
        this.side = b;
      }
    },
    computed: {
      prop() {
        let data = {
          subfield: false,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true
        }
        return data
      }
    }
  }
</script>

<style scoped>
  .move-left {
    transform: translateX(150px);
    opacity: 1;
  }

  #article {
    /*margin-top: 150px;*/
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url("https://s1.ax1x.com/2020/06/20/NQl0HJ.jpg");
    background-attachment: fixed;
    /*background-attachment: local;*/
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    margin-bottom: -40px;
  }

  #article .top-img {
    height: 150px;
    width: 100%;
  }

  #article .top-img img {
    width: 100%;
    height: 100%;
  }

  .shadow-model {
    width: 60%;
    height: 100%;
    margin: 100px 40px;
    padding: 15px;
  }

  .md {
    z-index: 5;
  }

  .control-button {
    position: absolute;
    right: 0;
    top: 45%;
    height: 100px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff7242;
    cursor: pointer;
    z-index: 101;
  }

  .show-button {
    position: fixed;
    left: 0;
    top: 45%;
    height: 100px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff7242;
    cursor: pointer;
  }
</style>