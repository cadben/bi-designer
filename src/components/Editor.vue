<template>
    <div class="editor">
      <div class="editor-header">
        <div class="header-undo">
          <icon-font
            size="18"
            title="撤回操作"
            code="&#xe822;"
            />
        </div>
        <div class="header-redo">
          <icon-font
            size="18"
            title="前进操作"
            code="&#xe822;"
            />
        </div>
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
    display: flex;
    .header-undo {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      padding: 5px;
      &:hover {
        background: #e9f1ff;
      }
    }
    .header-redo {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      padding: 5px;
      transform: rotateY(180deg);
      &:hover {
        background: #e9f1ff;
      }
    }
  }
  .editor-container {
    width: 1100px;
    height: 620px;
    margin: 30px auto;
  }
}
</style>
