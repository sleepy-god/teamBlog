<template>
  <div class="card-content">
    <div class="card-info is-center">
      <img class="avatar" src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=183326193,1784969774&fm=26&gp=0.jpg"></img>
      <div class="card-info__name">{{userName}}</div>
      <div class="card-info__description">{{description}}</div>
    </div>
    <div class="card-info-data">
      <div class="card-info-data__article is-center">
        <a href="#">
          <div class="headline">文章</div>
          <div class="count">{{articleCount}}</div>
        </a>
      </div>
    </div>
    <a href="javascript:" @click="AddFavorite();">
      <div class="card-info-bookmark is-center">
        <i class="el-icon-s-management"></i>
        <span>加入书签</span>
      </div>
    </a>
    <div class="card-info-social-icons is-center">
      <a href="#">
        <img class="icons" src="@/assets/img/icons/git.svg"></img>
      </a>
      <a href="#">
        <img class="icons" src="@/assets/img/icons/qq.svg"></img>
      </a>
      <a href="#">
        <img class="icons" src="@/assets/img/icons/weichat.svg"></img>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "CardContent",
    computed: {
      ...mapGetters(['userName', 'articleCount', 'description', 'accountType'])
    },
    methods: {
      AddFavorite() {
        // alert("浏览器不支持，请手动使用Ctrl + D 进行收藏")
        this.$notify({
          title: '警告',
          message: '浏览器不支持，请手动使用Ctrl + D 进行收藏',
          type: 'warning'
        });
      }
    }
  }
</script>

<style scoped>

  .avatar {
    height: 120px;
    width: 120px;
    display: inline-block;
    border-radius: 50%;
    /*vertical-align: top;*/
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -ms-transition: all 0.3s;
    transition: all 0.3s;
    margin-bottom: 1.1rem;
  }

  .avatar:hover {
    -webkit-transform: rotate(720deg);
    -moz-transform: rotate(720deg);
    -o-transform: rotate(720deg);
    -ms-transform: rotate(720deg);
    transform: rotate(720deg);
  }

  .card-content {
    margin: 20px 0;
    padding: 1rem 1.2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
  }

  .card-content .card-info {
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .card-info .card-info__name {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .card-info .card-info__description {
    margin-top: 0.3rem;
  }

  .card-info-data {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    /*display: box;*/
    display: flex;
    padding: 0.7rem 0;
  }

  .card-info-data .card-info-data__article {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 1;
    -ms-flex: 1 1;
    flex: 1 1;
    min-width: 0;

  }

  .card-info-data .card-info-data__article a {
    text-decoration: none;
  }

  .card-info-data .card-info-data__article a .headline {
    display: block;
    overflow: hidden;
    color: #4c4948;
    text-transform: uppercase;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    margin-bottom: 10%;
  }

  .card-info-data .card-info-data__article a .count {
    color: #000;
    font-size: 1rem;
  }

  .card-content a .card-info-bookmark {
    position: relative;
    z-index: 1;
    display: block;
    background-color: #49b1f5;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1.6rem;

    webkit-transition-duration: 1s;
    -moz-transition-duration: 1s;
    -o-transition-duration: 1s;
    -ms-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: color;
    -moz-transition-property: color;
    -o-transition-property: color;
    -ms-transition-property: color;
    transition-property: color;
  }

  .card-content a .card-info-bookmark:hover:before {
    -webkit-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    -moz-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    -o-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    -ms-transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -o-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
  }

  .card-content a .card-info-bookmark span {
    padding-left: 0.5rem;
  }

  .card-info-bookmark:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #ff7242;
    content: '';
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    -ms-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -o-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    -moz-transform-origin: 0 50%;
    -o-transform-origin: 0 50%;
    -ms-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }

  .card-info-social-icons {
    margin: 0.3rem 0 -0.3rem;
  }

  .icons {
    margin: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    color: #4c4948;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    -ms-transition: all 0.3s;
    transition: all 0.3s;
  }

  .icons:hover {
    -webkit-transform: rotate(720deg);
    -moz-transform: rotate(720deg);
    -o-transform: rotate(720deg);
    -ms-transform: rotate(720deg);
    transform: rotate(720deg);
  }

  .is-center {
    text-align: center;
  }
</style>