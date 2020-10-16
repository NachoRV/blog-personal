<template>
  <div class="m-8">
    <TheHeader v-on:show="showNav($event)"/>
    <div v-if="open" class="nav-destockp">
    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Categorias</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li v-for="tag of tags" :key="tag.slug" class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center">
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class>
          <p
            class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
          >{{ tag.name }}</p>
        </NuxtLink>
      </li>
    </ul>
   </div>
    <h1 class="font-bold text-4xl titel">Blog Posts</h1>
    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="article.img"
          />

          <div class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full">
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p class="font-bold text-gray-600 text-sm">{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <footer class="flex justify-center border-gray-500 border-t-2 flex-row">
      <p class="mt-6 flex-row">
        Created with &#128154; by IRVB
        follow me on
      <a
          href="https://twitter.com/Nachor_v"
          target="_blank"
        >
        <img src="~assets/svg/twitter-2.svg" alt="twitter" class="icon">
      </a>
      <a
          href="https://www.linkedin.com/in/ignacioroyovillanova/"
          target="_blank"
        >
        <img src="~assets/svg/linkedin-2.svg" alt="twitter" class="icon">
      </a>
      <a
          href="https://github.com/NachoRV"
          target="_blank"
        >
        <img src="~assets/svg/github-2.svg" alt="twitter" class="icon">
      </a>
        
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tags,
    };
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    showNav(e) {
      console.log(e)
      this.open = e
    }
  },
};
</script>

<style class="postcss">
.icon{
  margin: 0;
  width: 24px;
  height: 24px;
  margin-left: 5px;;
}
.titel {
  margin: 10px 5px;
}
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
</style>
