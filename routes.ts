import type { NuxtPage } from '@nuxt/schema'
import { resolve } from 'path'
const routes: NuxtPage[] = [
  {
    name: 'sign-in',
    path: '/sign-in',
    file: resolve(__dirname, 'pages/signIn.vue')
  },
  {
    name: 'index',
    path: '/',
    file: resolve(__dirname, 'pages/index.vue')
  },
]

export default routes