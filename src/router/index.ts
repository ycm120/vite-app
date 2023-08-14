import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/home',
          component: () => import('@/views/reactive/index.vue')
        },
        {
          path: '/home/menu01',
          component: () => import('@/views/menu01/index.vue')
        },
        {
          path: '/home/menu02',
          component: () => import('@/views/menu02/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
