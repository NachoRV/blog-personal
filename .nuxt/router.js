import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4596cb62 = () => interopDefault(import('..\\pages\\blog\\author\\_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _11a3c518 = () => interopDefault(import('..\\pages\\blog\\tag\\_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _6bdf752d = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2a323097 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog/author/:author?",
    component: _4596cb62,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _11a3c518,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug?",
    component: _6bdf752d,
    name: "blog-slug"
  }, {
    path: "/",
    component: _2a323097,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
