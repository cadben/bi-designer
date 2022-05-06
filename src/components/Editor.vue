<template>
    <div class="editor">
      <div class="editor-header">
        <div
          :class="`header-undo`"
          @click="handleUndo"
        >
          <icon-font
            size="18"
            title="撤回操作"
            code="&#xe617;"
            :class="`${!canUndo ? 'disable-btn' : ''}`"
            />
        </div>
        <div
          :class="`header-redo`"
          @click="handleRedo"
        >
          <icon-font
            size="18"
            title="前进操作"
            code="&#xe619;"
            :class="`header-redo ${!canRedo ? 'disable-btn' : ''}`"
            />
        </div>
      </div>
      <div class="editor-container">
        <DragArea></DragArea>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters(['executeOpearation', 'executeIndex']),
    canUndo() {
      return this.executeIndex > 0;
    },
    canRedo() {
      return this.executeIndex < this.executeOpearation.length - 1;
    },
  },
  methods: {
    handleUndo() {
      if (!this.canUndo) {
        return;
      }
      this.$store.commit({
        type: 'undo',
      });
    },
    handleRedo() {
      if (!this.canRedo) {
        return;
      }
      this.$store.commit({
        type: 'redo',
      });
    },
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
      &:hover {
        background: #e9f1ff;
      }
    }
    .disable-btn {
      color: #c8cad4;
      cursor: not-allowed;
    }
  }
  .editor-container {
    width: 1100px;
    height: 620px;
    margin: 30px auto;
  }
}
</style>
