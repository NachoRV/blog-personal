<template>
  <header class="flex sp">
    <!-- <NuxtLink to="/"><Logo class="mb-4" /></NuxtLink> -->
    <NuxtLink to="/">IRVB</NuxtLink>
    <div  class="flex sp">
      <AppSearchInput class="ml-8" />
      <img v-if="!show" v-on:click="menu()" class="ml-8 icn" src="~assets/svg/menu-24px.svg" alt="nav">
      <img v-if="show" v-on:click="menu()" class="ml-8 icn" src="~assets/svg/close-24px.svg" alt="nav">
    </div>
  </header>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
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
      show: false,
    }
  },
  methods: {
    menu() {
      this.show = !this.show;
      console.log(this.show);
      this.$emit('show', this.show)
    }
  }
};
</script>
<style scoped>
.icn {
  height: 30px;
  width: 30px;
}
.sp{
  justify-content: space-between;
}
</style>
