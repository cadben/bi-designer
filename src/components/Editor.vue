<template>
    <div class="editor">
      <div class="editor-header">
        这是头部操作栏
      </div>
      <div class="editor-container">
        <DragArea></DragArea>
      </div>
    </div>
</template>
<script>
import DragArea from './MainEditorArea/dragArea.vue';

export default {
  props: {},
  components: {
    DragArea,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.editor {
  flex: 1;
  background-color: #f7f8fa;
  .editor-header {
    padding: 20px;
    background: #fff;
    border-left: .02666667rem solid #ebedf0;
    box-shadow: 0px 2px 6px rgba(221, 221, 221, 0.445);
    z-index: 99;
  }
  .editor-container {
    width: 1100px;
    height: 620px;
    margin: 30px auto;
  }
}
</style>
