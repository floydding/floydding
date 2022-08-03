import { RouteRecordRaw } from 'vue-router'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import Posts from './views/Posts.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Main,
    name: 'Main'
  },
  {
    path: '/posts/:id',
    component: Posts,
    name: 'Posts'
  },
  {
    path: '/404',
    component: NotFound,
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'MatchAll'
  }
]

export default routes