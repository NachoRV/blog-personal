import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e7e5046a = () => interopDefault(import('../pages/blog/author/_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _424f2495 = () => interopDefault(import('../pages/blog/tag/_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _2cd85c20 = () => interopDefault(import('../pages/blog/_slug copy.vue' /* webpackChunkName: "pages/blog/_slug copy" */))
const _ad707b16 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _3cd882ea = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e7e5046a,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _424f2495,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug copy?",
    component: _2cd85c20,
    name: "blog-slug copy"
  }, {
    path: "/blog/:slug?",
    component: _ad707b16,
    name: "blog-slug"
  }, {
    path: "/",
    component: _3cd882ea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
