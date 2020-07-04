import Vue from 'vue'
import VueRouter from 'vue-router'
import el from "element-ui/src/locale/lang/el";

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home');
const Articles = () => import('@/views/articles/Articles');
const Article = () => import('@/views/article/Article');
const About = () => import('@/views/about/About');
const Category = () => import('@/views/category/Category');
const Login = () => import('@/views/login/Login');
const Register = () => import('@/views/register/Register');
const Tags = () => import('@/views/tags/Tags');
const Linked = () => import('@/views/linked/Linked');
const AddArtticle = () => import('@/views/addarticle/AddArticle');

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/articles',
    component: Articles
  },
  {
    path: '/article/:id',
    component: Article
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/tags',
    component: Tags
  },
  {
    path: '/linked',
    component: Linked
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/addArticle',
    component: AddArtticle
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //从from转到to
  // document.title = to.matched[0].meta.title;
  // console.log(to);
  if(to.path === '/login' || to.path === '/register') {
    next();
  } else {
    if(sessionStorage.userName) {
      next()
    } else {
      next({
        path:"/login",
        query: {redirect: to.fullPath}
      })
    }
  }
  
});

export default router
