(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(t,e,l){"use strict";l.r(e);var r=l(23),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("IRVB")])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,l){"use strict";l.r(e);l(24);var r=l(2),n={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,r=t.params,e.next=3,l("articles",r.slug).where({"author.name":{$regex:[r.author,"i"]}}).without("body").sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=l(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[l("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[l("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.articles[0].author.img,alt:t.articles[0].author.name}})]),t._v(" "),l("div",{staticClass:"overlay"}),t._v(" "),l("div",{staticClass:"absolute top-32 left-32 text-white"},[l("NuxtLink",{attrs:{to:"/"}},[l("Logo")],1),t._v(" "),l("div",{staticClass:"mt-16 -mb-3 flex flex-col uppercase text-sm"},[l("h1",{staticClass:"text-4xl font-bold"},[t._v("\n        "+t._s(t.articles[0].author.name)+"\n      ")]),t._v(" "),l("p",{staticClass:"mb-4"},[t._v(t._s(t.articles[0].author.bio))])])],1),t._v(" "),l("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[l("NuxtLink",{attrs:{to:"/"}},[l("p",{staticClass:"hover:underline"},[t._v("Back to Blog Post")])]),t._v(" "),l("h3",{staticClass:"mb-4 font-bold text-4xl"},[t._v("\n      Artículos de "+t._s(t.articles[0].author.name)+":\n    ")]),t._v(" "),l("ul",t._l(t.articles,(function(article){return l("li",{key:article.slug,staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[l("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?l("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img,alt:article.alt}}):t._e(),t._v(" "),l("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[l("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),l("p",[t._v(t._s(article.description))]),t._v(" "),l("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n              "+t._s(t.formatDate(article.updatedAt))+"\n            ")])])])],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:l(187).default})}}]);