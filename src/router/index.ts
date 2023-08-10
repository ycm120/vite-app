import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
const Home2View = () => import(/* webpackChunkName: "Home" */ '@/views/home2/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2View,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
