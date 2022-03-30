<template>
  <div id="app">
    <div class="editor-work">
      <Components />
      <Editor />
      <Option />
    </div>
  </div>
</template>
<script>
import Components from './components/Compoens.vue';
import Editor from './components/Editor.vue';
import Option from './components/Option.vue';

export default {
  components: {
    Components,
    Editor,
    Option,
  },
  data() {
    return {
      data: [],
    };
  },
};
</script>
<style lang="less">
body {
  margin: 0px;
}
#app {
  height: 100vh;
  width: 100vw;
  .editor-work {
    display: flex;
    height: 100%;
  }
}
</style>
