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
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
}
#app {
  height: 100%;
  .editor-work {
    display: flex;
    height: 100%;
  }
}
</style>
