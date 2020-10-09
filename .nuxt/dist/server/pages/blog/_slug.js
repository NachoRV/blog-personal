exports.ids = [3,2];
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("083745fe", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSearchInput.vue?vue&type=template&id=4e0da0e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"search\" autocomplete=\"off\" placeholder=\"Search Articles\""+(_vm._ssrAttr("value",(_vm.searchQuery)))+" class=\"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white\"> "),(_vm.articles.length)?_vm._ssrNode("<ul class=\"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden\">","</ul>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{"to":{ name: 'blog-slug', params: { slug: article.slug } }}},[_vm._v("\n        "+_vm._s(article.title)+"\n      ")])],1)}),0):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppSearchInput.vue?vue&type=template&id=4e0da0e2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSearchInput.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AppSearchInputvue_type_script_lang_js_ = ({
  data() {
    return {
      searchQuery: '',
      articles: []
    };
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }

      this.articles = await this.$content('articles').limit(6).search(searchQuery).fetch();
    }

  }
});
// CONCATENATED MODULE: ./components/AppSearchInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppSearchInputvue_type_script_lang_js_ = (AppSearchInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AppSearchInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppSearchInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5955ea18"
  
)

/* harmony default export */ var AppSearchInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/PrevNext.vue?vue&type=template&id=817790ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-between"},[(_vm.prev)?_c('NuxtLink',{staticClass:"text-primary font-bold hover:underline",attrs:{"to":{ name: 'blog-slug', params: { slug: _vm.prev.slug } }}},[_vm._v("\n    "+_vm._s(_vm.prev.title)+"\n  ")]):_c('span',[_vm._v(" ")]),_vm._ssrNode(" "),(_vm.next)?_c('NuxtLink',{staticClass:"font-bold hover:underline",attrs:{"to":{ name: 'blog-slug', params: { slug: _vm.next.slug } }}},[_vm._v("\n    "+_vm._s(_vm.next.title)+"\n  ")]):_c('span',[_vm._v(" ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/global/PrevNext.vue?vue&type=template&id=817790ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/PrevNext.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PrevNextvue_type_script_lang_js_ = ({
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
});
// CONCATENATED MODULE: ./components/global/PrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_PrevNextvue_type_script_lang_js_ = (PrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/global/PrevNext.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_PrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d16e7eea"
  
)

/* harmony default export */ var PrevNext = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(38);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".nuxt-content p{margin-bottom:20px}.nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.icon.icon-link{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");display:inline-block;width:20px;height:20px;background-size:20px 20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4K"

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Author.vue?vue&type=template&id=7001725a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[_c('NuxtLink',{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{"to":("/blog/author/" + (_vm.author.name))}},[(_vm.author.img)?_c('img',{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{"src":_vm.author.img}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"flex flex-col m-4"},[_c('h4',{staticClass:"font-semibold"},[_vm._v("Author")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.author.name))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.author.bio))])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Author.vue?vue&type=template&id=7001725a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Author.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Authorvue_type_script_lang_js_ = ({
  props: {
    author: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Author.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Authorvue_type_script_lang_js_ = (Authorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Author.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b3a9e8fc"
  
)

/* harmony default export */ var Author = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=6a35f733&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[_vm._ssrNode("<div class=\"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.article.img))+(_vm._ssrAttr("alt",_vm.article.alt))+" class=\"absolute h-full w-full object-cover\"> <div class=\"overlay\"></div> "),_vm._ssrNode("<div class=\"absolute top-32 left-32 text-white\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('Logo')],1),_vm._ssrNode(" <div class=\"mt-16 -mb-3 flex uppercase text-sm\"><p class=\"mr-3\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatDate(_vm.article.updatedAt))+"\n        ")+"</p> <span class=\"mr-3\">•</span> <p>"+_vm._ssrEscape(_vm._s(_vm.article.author.name))+"</p></div> <h1 class=\"text-6xl font-bold\">"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_vm._l((_vm.article.tags),function(tag,id){return _vm._ssrNode("<span>","</span>",[_c('NuxtLink',{attrs:{"to":("/blog/tag/" + (_vm.tags[tag].slug))}},[_c('span',{staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[_vm._v("\n            "+_vm._s(_vm.tags[tag].name)+"\n          ")])])],1)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex absolute top-3rem right-3rem\">","</div>",[_c('NuxtLink',{staticClass:"mr-8 self-center text-white font-bold hover:underline",attrs:{"to":"/"}},[_vm._v("\n        Blog Post\n      ")]),_vm._ssrNode(" "),_c('AppSearchInput')],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll\">","</div>",[_vm._ssrNode("<h1 class=\"font-bold text-4xl\">"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.article.description))+"</p> <p class=\"pb-4\">"+_vm._ssrEscape("Post last updated: "+_vm._s(_vm.formatDate(_vm.article.updatedAt)))+"</p> "),_vm._ssrNode("<nav class=\"pb-6\">","</nav>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.article.toc),function(link){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{
            'font-semibold': link.depth === 2
          }))+">","</li>",[_c('nuxtLink',{staticClass:"hover:underline",class:{
              'py-2': link.depth === 2,
              'ml-2 pb-2': link.depth === 3
            },attrs:{"to":("#" + (link.id))}},[_vm._v(_vm._s(link.text))])],1)}),0)]),_vm._ssrNode(" "),_c('nuxt-content',{attrs:{"document":_vm.article}}),_vm._ssrNode(" "),_c('author',{attrs:{"author":_vm.article.author}}),_vm._ssrNode(" "),_c('PrevNext',{staticClass:"mt-8",attrs:{"prev":_vm.prev,"next":_vm.next}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=6a35f733&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const article = await $content('articles', params.slug).fetch();
    const tagsList = await $content('tags').only(['name', 'slug']).where({
      name: {
        $containsAny: article.tags
      }
    }).fetch();
    const tags = Object.assign({}, ...tagsList.map(s => ({
      [s.name]: s
    })));
    const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.slug).fetch();
    return {
      article,
      tags,
      prev,
      next
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
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c40d3ba"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(29).default,AppSearchInput: __webpack_require__(33).default,Author: __webpack_require__(48).default,PrevNext: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map