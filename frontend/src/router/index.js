import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/header-nav'
import HomePage from '@/components/HomePage'
import MainPage from '@/components/MainPage'
// import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'main',
          component: MainPage // 메인 페이지
        }
      ]
    }
  ],
  mode: 'history'
})
