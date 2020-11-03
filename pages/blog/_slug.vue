<template>
 <div class="m-8">
   <div class="flex sb">
      <NuxtLink to="/"><Logo /></NuxtLink>
      <AppSearchInput />
   </div>
  <article class="article">
    <div class="img-container shadow-md">
      <img
          :src="article.img"
          :alt="article.alt"
          class="img shadow"
      />
    </div>
    <div class="content">
      <div class="content-item">
        <h1 class="font-bold article-title">{{ article.title }}</h1>
        📅 {{ formatDate(article.updatedAt) }} |
        <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
            <span
                class=""
            >
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
        </span>

      </div>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <author :author="article.author" />
      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="mt-8" />
    </div>
  </article>
 </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
.sb {
  justify-content: space-between;
}

.article {
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 30px;
}

.img-container {
  margin: 5% auto 5% auto;
  width: 50%;
  max-height: 500px;
}

.img {
  width: 100%;
  max-height: 500px;
  max-width: 100%;
  margin: auto;
}

.content {
  margin: 15px auto;
  max-width: 50%;
}

.content-item {
  margin-bottom: 50px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
