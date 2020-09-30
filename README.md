# blogCommunity

首先分享一下我的个人博客http://www.sleeepygod.xyz

##  设计思路

* blogCommunity的设计初衷是给予团队一个 经验分享与项目记录的平台
* blogCommunity允许个人或团队进行注册
* 个人登录时可以看到以团队名义发表的文章与自己发表的文章，而团队账户登录时，只能看到以团队名义发表的文章

##  技术应用

###  前端技术应用：

* Html5 + Css3
* Vue-cli
* Vue.js
* Vuex
* Vue-router
* axios
* Element-ui
* moment.js
* ECharts
* mavon-editor

###  后端技术应用：

* NodeJS
* express-web框架
* moment.js
* mongoos框架
* mongodb（noSql）

##  基本功能

* 注册时可以分别选择个人/团队注册
* 登录时使用账号进行登录
* 主页面展示所有文章，侧边栏展示个人/团队信息，博客公告，最近文章以及网站5日访问人数统计图
* 在主页文章题目后使用红字标注作者
* 文章模块中，以时间线形式展示文章
* 标签模块中，以标签云的方式进行展示，点击标签显示含有此标签的文章列表
* 分类模块中， 以分类的方式进行展示，点击分类显示属于该分类的文章列表
* 链接界面分享了数个外链
* 文章详情页面使用mavon-editor进行解析，将文章进行展示，且可以通过目录栏展示目录结构
* About界面展示了blogCommunity创作团队的介绍
* 网站资讯模块中使用了Echarts折线图，将近5天内博客访问人数进行实时更新显示
* 在所有页面都应用了Element-ui的BackToTop的返回顶部按钮，当出现下滑操作时，自动显示
* 整体网站应用Element-ui进行了响应式优化

##  逻辑详情

1. 整体设计使用组件化思想，引入MVVM的框架思想，整个网站属于SPA（Signal Page Application）单页面应用
2. 使用vue-router中的导航守卫对所有路由进行限制，当跳转路由不是/login或/register时则判断当前是否有已登录账户，然后进行分别跳转
3. 出于安全考虑，在后台使用token验证机制，防止出现csrf（跨站请求伪造）攻击
4. 将所有文章信息存储在vuex中，进行集中的状态管理
5. 在前后端数据交互过程中，考虑到存在跨域请求，在response中设置了header为`Access-Control-Allow-Origin`
6. 在主页文章显示时使用分页机制，加快渲染速度，提高用户使用舒适度
7. 首页使用moment.js对时间进行处理，制作了实时显示时间的组件
8. 前后端的数据请求，全部使用axios库进行处理，在所有请求的header中添加`'Content-Type': 'application/json'`
9. 在部分组件中使用<font color="red">debounce</font>(防抖函数)、<font color="red">throttle</font>(节流函数)，对性能进行了优化

##  运行方法

运行前端服务器

``` js
npm run serve
```



配置mongodb(windows)

1、在官网下载安装包

2、按照步骤安装

3、将安装路径配置在系统环境变量的path中

4、启动命令

```
mongod
mongo
```

启动后也可以使用可视化工具navicat等进行可视化管理



运行后端服务器

```
npm insatall
nodemon .\server.js
```
