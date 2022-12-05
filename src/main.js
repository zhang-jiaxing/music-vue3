import { createApp } from 'vue'
// import App2 from './App2.vue'
// import App from './App.vue'
import App3 from './App3.vue'
import sosuo from './components/router/sosuo.vue'
import Home from './components/router/Home.vue'
import About from './components/router/About.vue'
import paihang from './components/router/paihang.vue'
import gdliebiao from './components/router/gdliebiao.vue'
import zanzhu from './components/router/zanzhu.vue'
import Gyu from './components/router/guanyu.vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';

import { createRouter,createWebHashHistory  } from 'vue-router'
const routes = [
  {
    path:'/gdliebiao',
    component:gdliebiao
  },
    {
      path:'/soshuo',
      component:sosuo
    },
    {
      path:'/dd',
      component:paihang
    },
    { 
      path:'/',
      component: Home
     },
    { 
      path:'/about',
      component: About
     },
     {
      path:'/zanzhu',
      component:zanzhu
     },
     {
      path:'/guanyu',
      component:Gyu
     }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes,
})

import 'ant-design-vue/dist/antd.css';
import './assets/main.css'
const app = createApp(App3)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(Antd)

app.mount('#app')



