<template>
  <BackLink/>
  <div
    v-html="m.render(mdSource)"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import BackLink from "../components/BackLink.vue";
import md from 'markdown-it'

const m = md()

const route = useRoute()
const postId = route.params.id

const modules = import.meta.glob(`../../content/posts/*.md`, { eager: true, as: 'raw' })
const mdSource = ref(modules[`../../content/posts/${postId}.md`])
</script>
