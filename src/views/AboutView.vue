<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import { onMounted, ref } from "vue";
import { useStore } from "@/store";
import { ADD_COMPONENT } from "@/store/mutationTypes";

const store = useStore();
const components = computed(() => store.state.components);
const addComponent = (component: unknown) => {
  store.commit(ADD_COMPONENT, {
    components: component,
  });
};
const addEditor = () => {
  console.log("addEditor");
};

const addOther = () => {
  console.log("addEditor");
};

const handleClick = () => {
  console.log("hoge");
  console.log(myQuillEditor.value);
};

const myQuillEditor = ref<HTMLElement>();

onMounted(() => {
  console.log(myQuillEditor.value);
});
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <QuillEditor
      ref="myQuillEditor"
      theme="bubble"
      toolbar="essential"
      placeholder="入力してください"
      :content="'<h2>I am Example</h2>'"
      @click="handleClick"
    />
    <!-- <h1>This is an about page</h1>
    <QuillEditor
      theme="snow"
      toolbar="essential"
      placeholder="入力してください"
    /> -->
    <QuillEditor
      theme="bubble"
      toolbar="essential"
      placeholder="入力してください"
      v-for="(component, i) in components"
      :key="i"
    />
    <div class="ButtonGroup">
      <button type="button" @click="addComponent('QuillEditor')">
        add Editor
      </button>
      <button type="button" @click="addOther">add Other</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
}
</style>
