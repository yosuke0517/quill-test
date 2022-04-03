<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

const addEditor = () => {
  console.log("addEditor");
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <QuillEditor theme="bubble" toolbar="essential" />
    <button type="button" @click="addEditor">add Editor</button>
  </div>
</template>
