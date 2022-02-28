// 程序的主入口文件，ts文件
// createApp是一个函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入的是APP组件，是所有组件的父级组件
import App from './App.vue'
import router from './router'
import store from './store'
// 创建APP应用返回对应的实例对象，调用mount方法挂载道id为app的div上
createApp(App).use(store).use(router).mount('#app')
