<template>
  <div id="register">
    <shadow-model class="reg-shadow">
      <el-form :model="user" status-icon  ref="register" :rules="rules" label-width="100px" class="regForm">
        <span class="err-label" v-show="errShow">{{err}}</span>
        <el-form-item label="注册类型" class="form-item">
          <el-radio-group v-model="user.type" size="small">
            <el-radio-button label="personal">成员注册</el-radio-button>
            <el-radio-button label="team">团队注册</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="user.type === 'personal'" label="用户名" prop="name" size="medium">
          <el-input type="text" v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="user.type === 'personal'" label="所属团队" size="medium">
          <el-input type="text" v-model="user.team" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="user.type === 'team'" label="团队名称" prop="name" size="medium">
          <el-input type="text" v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" size="medium">
          <el-input type="text" v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" size="medium" prop="password">
          <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" size="medium" prop="checkPassword">
          <el-input type="password" v-model="user.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">注 册</el-button>
        </el-form-item>
      </el-form>
    </shadow-model>
  </div>
</template>

<script>
  import ShadowModel from "@/components/common/shadowModel/ShadowModel";
  import {checkName, register} from "@/network/user";

  export default {
    name: "Register",
    components: {
      ShadowModel
    },
    data() {
      let validateName = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('用户名为空'))
        } else {
          console.log(this.user.name);
          checkName(this.user.name).then(res => {
            // 0存在 1不存在
            if(res.data.state === 0 ) {
              callback(new Error(res.data.msg))
            } else  {
              callback()
            }
          })
        }
      }
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.user.checkPassword !== '') {
            this.$refs.register.validateField('checkPassword');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        user: {
          type: 'personal',
          name: '',
          password: '',
          checkPassword: '',
          phone: '',
          team: ''
        },
        err: '',
        errShow: false,
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            {validator: validateName, tiger: 'change'}
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.register.validate((valid) => {
          if (valid) {
            this.user.password = this.$md5(this.user.password);
            this.user.checkPassword = this.$md5(this.user.checkPassword);
            register(this.user).then(res => {
              if(res.data.err === 0) {
                this.$router.replace('/login')
              } else {
                this.errShow = true;
                this.err = res.data.msg;
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
        console.log('reg');
      }
    }
  }
</script>

<style scoped>
  #register {
    height: 100vh;
    width: 100%;

    background-image: url("https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/archive.jpg");
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

  #register .shadow-model {
    background-color: rgba(255,255,255,0.6);
    margin-top: 0;
    width: 40%;
    min-height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .err-label {
    font-size: 12px;
    color: red;
    text-align: center;
    position: relative;
    left: 35%;
  }

  .form-item label {
    color: #fff;
  }
  .reg-shadow {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-form {
    margin-left: -30px;
  }

</style>