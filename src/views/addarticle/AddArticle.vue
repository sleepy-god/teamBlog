<template>
  <div id="add-article">
    <shadow-model class="art-model">
      <el-form>
        <el-form-item>
          <el-row>
            <el-col :span="5">
              <label>标题：</label>
            </el-col>
            <el-col :span="19">
              <el-input v-model="title"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="5">
              <label>日期：</label>
            </el-col>
            <el-col :span="19">
              <el-input type="date" v-model="date"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="5">
              <label>分类：</label>
            </el-col>
            <el-col :span="19">
              <el-input v-model="cate"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="10">
              <label>文章图片链接：</label>
            </el-col>
            <el-col :span="14">
              <el-input v-model="imgUrl"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="5">
              <label>标签：</label>
            </el-col>
            <el-col :span="14">
              <el-input v-model="tag"></el-input>
            </el-col>
            <el-col :span="4" :push="1" >
              <el-button @click="inputTag" type="primary" plain>添加</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item v-for="(item, index) in tags" :key="index">
          {{item}}
        </el-form-item>
      </el-form>
      <mavon-editor
              class="md"
              v-model="content"
              :subfield="prop.subfield"
              :defaultOpen="prop.defaultOpen"
              :toolbarsFlag="prop.toolbarsFlag"
              :editable="prop.editable"
              :scrollStyle="prop.scrollStyle"
              @save="save"
              :boxShadow="true">
      </mavon-editor>

    </shadow-model>
  </div>
</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  import {addArticle} from "@/network/articles";

  export default {
    name: "AddArticle",
    components: {
      ShadowModel
    },
    data() {
      return {
        content: '',
        title: '',
        date: '',
        cate: '',
        tags: [],
        imgUrl: '',
        tag: ''
      }
    },
    computed: {
      brief() {
        return this.content
      },
      prop() {
        let data = {
          subfield: false,// 单双栏模式
          defaultOpen: 'edit',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: true,
          toolbarsFlag: true,
          scrollStyle: true
        }
        return data
      }
    },
    methods: {
      save(value, render) {
        console.log(this.content);
        addArticle(this.$store.getters.type, this.content, this.title, this.brief, this.date, this.cate, this.tags, this.imgUrl).then(res => {
          if(res.data.msg === 'success') {
            alert('保存成功')
          }
        })
      },
      inputTag() {
        this.tags.push(this.tag);
        this.tag = ''
      }
    }
  }
</script>

<style scoped>
  .art-model {
    margin: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 5;
  }
  .md {
    min-width: 90%;
    min-height: 70%;
    z-index: 10;
  }
  .el-form {
    /*border: 1px solid #000;*/
    padding-left: 5%;
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .el-form-item {
    margin: 15px;
  }


</style>