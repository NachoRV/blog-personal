exports.ids = [5];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=12d39bb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._ssrNode("IRVB")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=12d39bb6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Logo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35a74b62"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/tag/_tag.vue?vue&type=template&id=030ee184&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[_vm._ssrNode("<div class=\"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left\"><img"+(_vm._ssrAttr("src",_vm.tag.img))+(_vm._ssrAttr("alt",_vm.tag.name))+" class=\"absolute h-full w-full object-cover\"></div> <div class=\"overlay\"></div> "),_vm._ssrNode("<div class=\"absolute top-32 left-32 right-32 text-white\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('Logo')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-16 -mb-3 flex flex-col text-sm\">","</div>",[_vm._ssrNode("<div class=\"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left\">","</div>",[_vm._ssrNode("<h1 class=\"text-4xl font-bold uppercase\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.tag.name)+"\n        ")+"</h1> <p class=\"mb-4 uppercase\">"+_vm._ssrEscape(_vm._s(_vm.tag.description))+"</p> "),_c('nuxt-content',{attrs:{"document":_vm.tag}})],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('p',{staticClass:"hover:underline"},[_vm._v("Back to All Articles")])]),_vm._ssrNode(" <h3 class=\"mb-4 font-bold text-4xl\">"+_vm._ssrEscape("Articles tagged "+_vm._s(_vm.tag.name)+":")+"</h3> "),_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li class=\"w-full px-2 xs:mb-6 md:mb-12 article-card\">","</li>",[_c('NuxtLink',{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{"to":{ name: 'blog-slug', params: { slug: article.slug } }}},[(article.img)?_c('img',{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{"src":article.img,"alt":article.alt}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[_c('h2',{staticClass:"font-bold"},[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('p',{staticClass:"font-bold text-gray-600 text-sm"},[_vm._v("\n              "+_vm._s(_vm.formatDate(article.updatedAt))+"\n            ")])])])],1)}),0)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/tag/_tag.vue?vue&type=template&id=030ee184&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/tag/_tag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _tagvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const tags = await $content('tags').where({
      slug: {
        $contains: params.tag
      }
    }).limit(1).fetch();
    const tag = tags.length > 0 ? tags[0] : {};
    const articles = await $content('articles', params.slug).where({
      tags: {
        $contains: tag.name
      }
    }).sortBy('createdAt', 'asc').fetch();
    return {
      articles,
      tag
    };
  },

  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('en', options);
    }

  }
});
// CONCATENATED MODULE: ./pages/blog/tag/_tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_tagvue_type_script_lang_js_ = (_tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/tag/_tag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "788fd130"
  
)

/* harmony default export */ var _tag = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=_tag.js.map