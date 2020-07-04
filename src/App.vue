<template>
  <div id="app">
    <nav-bar class="nav-bar" @showMobile="handleMobile" :username="userName" :show-user="showUser"/>
    <mobile-nav-bar v-show="mobileNav" @hideMobile="handleMobile" :show-user="showUser"/>
    <router-view @userLogin="userLogin"/>
    <my-footer />
    <back-top />
  </div>
</template>
<script>
  import NavBar from "@/components/content/navbar/NavBar";
  import MobileNavBar from "@/components/content/navbar/MobileNavBar";
  import BackTop from "@/components/common/backTop/BackTop";
  import MyFooter from "@/views/footer/MyFooter";
  import {appVisit} from "@/network/app";
  import {getAritcles} from "@/network/articles";
  import {SAVE_ARTICLES} from "@/store/mutations.type";
  import {getUser} from "@/network/user";

  export default {
    name: 'App',
    components: {
      NavBar,
      MobileNavBar,
      BackTop,
      MyFooter
    },
    data() {
      return {
        location: 0,
        userName: sessionStorage.userName,
        showUser: false,
        mobileNav: false
      }
    },
    mounted() {
      if(sessionStorage.userName) {
        this.showUser = true;
        appVisit(sessionStorage.userName).then(res => {
          console.log(res.data.count);
        })
      }
      this.getArticles();
      this.checkUser()
    },
    methods: {
      handleMobile() {
        this.mobileNav = !this.mobileNav
      },
      userLogin(user) {
        sessionStorage.userName = user.username;
        this.userName = sessionStorage.userName;
        this.showUser = true;
        this.$store.dispatch("setUser", user);
        this.getArticles();
        appVisit(sessionStorage.userName).then(res => {
          console.log(res.data.count);
          this.$router.replace('/home')
        })

      },
      checkUser() {
        if(sessionStorage.userName !== '' || !sessionStorage.userName) {
          getUser().then(res => {
            this.$store.dispatch("setUser", res.data.user)
          })
        }
      },
      getArticles() {
        getAritcles().then(res => {
          this.$store.commit(SAVE_ARTICLES, res.data.articles)
        })
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    width: 100%;
    height: 100%;
    font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, MicrMicrosoft YaHei;
  }

  body {
    background-color: #d9ecff;

  }

  .nav-bar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    width: 100vh;
  }

</style>
