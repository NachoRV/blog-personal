exports.ids = [6];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("90f0709c", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0622f7d8", content, true, context)
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

/***/ 39:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMjIuNDYgNmMtLjc3LjM1LTEuNi41OC0yLjQ2LjY5Yy44OC0uNTMgMS41Ni0xLjM3IDEuODgtMi4zOGMtLjgzLjUtMS43NS44NS0yLjcyIDEuMDVDMTguMzcgNC41IDE3LjI2IDQgMTYgNGMtMi4zNSAwLTQuMjcgMS45Mi00LjI3IDQuMjljMCAuMzQuMDQuNjcuMTEuOThDOC4yOCA5LjA5IDUuMTEgNy4zOCAzIDQuNzljLS4zNy42My0uNTggMS4zNy0uNTggMi4xNWMwIDEuNDkuNzUgMi44MSAxLjkxIDMuNTZjLS43MSAwLTEuMzctLjItMS45NS0uNXYuMDNjMCAyLjA4IDEuNDggMy44MiAzLjQ0IDQuMjFhNC4yMiA0LjIyIDAgMCAxLTEuOTMuMDdhNC4yOCA0LjI4IDAgMCAwIDQgMi45OGE4LjUyMSA4LjUyMSAwIDAgMS01LjMzIDEuODRjLS4zNCAwLS42OC0uMDItMS4wMi0uMDZDMy40NCAyMC4yOSA1LjcgMjEgOC4xMiAyMUMxNiAyMSAyMC4zMyAxNC40NiAyMC4zMyA4Ljc5YzAtLjE5IDAtLjM3LS4wMS0uNTZjLjg0LS42IDEuNTYtMS4zNiAyLjE0LTIuMjN6IiBmaWxsPSIjNjI2MjYyIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDApIiAvPjwvc3ZnPg=="

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMTkgM2EyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxNG0tLjUgMTUuNXYtNS4zYTMuMjYgMy4yNiAwIDAgMC0zLjI2LTMuMjZjLS44NSAwLTEuODQuNTItMi4zMiAxLjN2LTEuMTFoLTIuNzl2OC4zN2gyLjc5di00LjkzYzAtLjc3LjYyLTEuNCAxLjM5LTEuNGExLjQgMS40IDAgMCAxIDEuNCAxLjR2NC45M2gyLjc5TTYuODggOC41NmExLjY4IDEuNjggMCAwIDAgMS42OC0xLjY4YzAtLjkzLS43NS0xLjY5LTEuNjgtMS42OWExLjY5IDEuNjkgMCAwIDAtMS42OSAxLjY5YzAgLjkzLjc2IDEuNjggMS42OSAxLjY4bTEuMzkgOS45NHYtOC4zN0g1LjV2OC4zN2gyLjc3eiIgZmlsbD0iIzYyNjI2MiIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0icmdiYSgwLCAwLCAwLCAwKSIgLz48L3N2Zz4="

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMTIgMkExMCAxMCAwIDAgMCAyIDEyYzAgNC40MiAyLjg3IDguMTcgNi44NCA5LjVjLjUuMDguNjYtLjIzLjY2LS41di0xLjY5Yy0yLjc3LjYtMy4zNi0xLjM0LTMuMzYtMS4zNGMtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40N2MtLjkxLS42Mi4wNy0uNi4wNy0uNmMxIC4wNyAxLjUzIDEuMDMgMS41MyAxLjAzYy44NyAxLjUyIDIuMzQgMS4wNyAyLjkxLjgzYy4wOS0uNjUuMzUtMS4wOS42My0xLjM0Yy0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00LjkyYzAtMS4xMS4zOC0yIDEuMDMtMi43MWMtLjEtLjI1LS40NS0xLjI5LjEtMi42NGMwIDAgLjg0LS4yNyAyLjc1IDEuMDJjLjc5LS4yMiAxLjY1LS4zMyAyLjUtLjMzYy44NSAwIDEuNzEuMTEgMi41LjMzYzEuOTEtMS4yOSAyLjc1LTEuMDIgMi43NS0xLjAyYy41NSAxLjM1LjIgMi4zOS4xIDIuNjRjLjY1LjcxIDEuMDMgMS42IDEuMDMgMi43MWMwIDMuODItMi4zNCA0LjY2LTQuNTcgNC45MWMuMzYuMzEuNjkuOTIuNjkgMS44NVYyMWMwIC4yNy4xNi41OS42Ny41QzE5LjE0IDIwLjE2IDIyIDE2LjQyIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDJ6IiBmaWxsPSIjNjI2MjYyIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDApIiAvPjwvc3ZnPg=="

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_class_postcss_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_class_postcss_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_class_postcss_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_class_postcss_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_class_postcss_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_class_postcss_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".icon{margin:0}.titel{margin:10px 5px}.article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}.flex-row{display:flex;flex-direction:row}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6Ii8+PC9zdmc+"

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMCAwaDI4djI4SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz48L3N2Zz4="

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_41b7f904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_41b7f904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_41b7f904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_41b7f904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_41b7f904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_41b7f904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".icn[data-v-41b7f904]{height:30px;width:30px}.sp[data-v-41b7f904]{justify-content:space-between}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=41b7f904&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"flex sp"},[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("IRVB")]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex sp\" data-v-41b7f904>","</div>",[_c('AppSearchInput',{staticClass:"ml-8"}),_vm._ssrNode(" "+((!_vm.show)?("<img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt=\"nav\" class=\"ml-8 icn\" data-v-41b7f904>"):"<!---->")+" "+((_vm.show)?("<img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"nav\" class=\"ml-8 icn\" data-v-41b7f904>"):"<!---->"))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=41b7f904&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const tags = await $content("tags", params.slug).only(["name", "description", "img", "slug"]).sortBy("createdAt", "asc").fetch();
    return {
      articles,
      tags
    };
  },

  data() {
    return {
      show: false
    };
  },

  methods: {
    menu() {
      this.show = !this.show;
      console.log(this.show);
      this.$emit('show', this.show);
    }

  }
});
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TheHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41b7f904",
  "da081692"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppSearchInput: __webpack_require__(33).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5ddc8876&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-8"},[_c('TheHeader',{on:{"show":function($event){return _vm.showNav($event)}}}),_vm._ssrNode(" "),(_vm.open)?_vm._ssrNode("<div class=\"nav-destockp\">","</div>",[_vm._ssrNode("<h3 class=\"mb-4 font-bold text-2xl uppercase text-center\">Categorias</h3> "),_vm._ssrNode("<ul class=\"flex flex-wrap mb-4 text-center\">","</ul>",_vm._l((_vm.tags),function(tag){return _vm._ssrNode("<li class=\"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center\">","</li>",[_c('NuxtLink',{attrs:{"to":("/blog/tag/" + (tag.slug))}},[_c('p',{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[_vm._v(_vm._s(tag.name))])])],1)}),0)],2):_vm._e(),_vm._ssrNode(" <h1 class=\"font-bold text-4xl titel\">Blog Posts</h1> "),_vm._ssrNode("<ul class=\"flex flex-wrap\">","</ul>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li class=\"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card\">","</li>",[_c('NuxtLink',{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{"to":{ name: 'blog-slug', params: { slug: article.slug } }}},[(article.img)?_c('img',{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{"src":article.img}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[_c('h2',{staticClass:"font-bold"},[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v("by "+_vm._s(article.author.name))]),_vm._v(" "),_c('p',{staticClass:"font-bold text-gray-600 text-sm"},[_vm._v(_vm._s(article.description))])])])],1)}),0),_vm._ssrNode(" <footer class=\"flex justify-center border-gray-500 border-t-2 flex-row\"><p class=\"mt-6 flex-row\">\n      Created with 💚 by IRVB\n      follow me on\n    <a href=\"https://twitter.com/Nachor_v\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt=\"twitter\" class=\"icon\"></a> <a href=\"https://www.linkedin.com/in/ignacioroyovillanova/\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt=\"twitter\" class=\"icon\"></a> <a href=\"https://github.com/NachoRV\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"twitter\" class=\"icon\"></a></p></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5ddc8876&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const articles = await $content("articles", params.slug).only(["title", "description", "img", "slug", "author"]).sortBy("createdAt", "desc").fetch();
    const tags = await $content("tags", params.slug).only(["name", "description", "img", "slug"]).sortBy("createdAt", "asc").fetch();
    return {
      articles,
      tags
    };
  },

  data() {
    return {
      open: false
    };
  },

  methods: {
    showNav(e) {
      console.log(e);
      this.open = e;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d3de0af6"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(49).default})


/***/ })

};;
//# sourceMappingURL=index.js.map