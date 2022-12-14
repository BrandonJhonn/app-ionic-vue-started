import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import VueDetail from '../views/VueDetailPage.vue';
import AngularDetail from '../views/AngularDetailPage.vue';
import ReactDetail from '../views/ReactDetailPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/vue',
    name: 'VueDetail',
    component: VueDetail
  },
  {
    path: '/angular',
    name: 'AngularDetail',
    component: AngularDetail
  },
  {
    path: '/react',
    name: 'ReactDetail',
    component: ReactDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
