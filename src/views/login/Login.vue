<template>
  <div id="login">
    <shadow-model class="shadow-model">
      <el-form :model="user" status-icon ref="login" :rules="rules" class="form-body">
        <label class="err-label" v-show="errShow">用户名密码错误</label>
        <el-form-item prop="account">
          <label>团队/个人账号：</label>
          <el-input type="text" v-model="user.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码：</label>
          <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="button-model">
          <el-button type="primary" @click="submitForm"  v-on:keyup.enter="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </shadow-model>

  </div>
</template>

<script>

  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  // import {login} from "@/network/user";
import {login} from "@/network/user";

  export default {
    name: "Login",
    components: {
      ShadowModel
    },
    data() {
      let validateAccount = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('账号不可以为空'))
        } else {
          callback()
        }
      }
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        user: {
          account: '',
          password: ''
        },
        err:'',
        errShow: false,
        rules: {
          password: [
            {validator: validatePass}
          ],
          account: [
            {validator: validateAccount}
          ]
        }
      }
    },
  
    methods: {
      submitForm() {
        this.$refs.login.validate((valid) => {
          if (valid) {
            this.user.password = this.$md5(this.user.password);
            login(this.user.account, this.user.password).then(res => {
              if(res.data.err === 0) {
                // console.log(res.data.username);
                this.$emit('userLogin', res.data.user)

              } else if(res.data.err === 1){
                this.errShow = true;
                this.err = res.data.msg;
              } else {
                this.resetForm();
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
        // console.log('login');
      },
      resetForm() {
        this.user.account = '';
        this.user.password = ''
      }
    }
  }
</script>

<style scoped>
  /*#login {*/
  /*  background-color: rgba(0, 0, 0, 0.6);*/
  /*}*/
  #login {
    height: 100vh;
    width: 100%;

    background-image: url("https://s1.ax1x.com/2020/06/20/NQlwB4.jpg");
    position: relative;
    background-color: #49b1f5;
    background-attachment: local;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: -30px;
  }

  .err-label {
    font-size: 12px;
    color: red;
    text-align: center;
    position: relative;
    left: 35%;
  }

  #login .shadow-model {
    background-color: rgba(0,0,0,0.6);
    margin-top: 0;
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    color: #fff;
  }

  .button-model {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>