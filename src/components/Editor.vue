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
        <DragArea
          :scale-num="scaleOption"
        >
        </DragArea>
        <div class="scale-tip">
          <span @click="handleAddorSubScale('sub')">
            <icon-font
              code="&#xe607;"
              color="#D8D9E2"
            ></icon-font>
          </span>
          <el-slider
            v-model="scaleOption"
            :step="0.1"
            :min="0.2"
            :max="1.5"
            :format-tooltip="scaleTipStyle"
            class="scale-bar"
          ></el-slider>
          <span @click="handleAddorSubScale('add')">
            <icon-font
              code="&#xe608;"
              color="#D8D9E2"
            ></icon-font>
          </span>
        </div>
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
      scaleOption: 1,
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
    handleAddorSubScale(type) {
      console.log(type);
      if (type === 'sub') {
        this.scaleOption -= 0.1;
      } else {
        this.scaleOption += 0.1;
      }
    },
    scaleTipStyle(val) {
      return `${Math.floor(val * 100)}%`;
    },
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
  overflow: hidden;
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
    width: 100%;
    height: calc(100% - 70px);
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 10%),
    linear-gradient(360deg, rgba(50, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 20px 20px;
    overflow: scroll;
    position: relative;
    /deep/ .scale-tip {
      position: fixed;
      width: 200px;
      bottom: 40px;
      right: 450px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .scale-bar {
        width: 130px;
      }
      .el-slider__runway {
        height: 6px;
        border-radius: 2px;
        margin: 8px 0;
      }
      .el-slider__button-wrapper {
        top: -16px;
        .el-slider__button {
          width: 10px;
          height: 10px;
          border: solid 1px #D8D9E2;
        }
      }
      .el-slider__bar {
        background-color: #D8D9E2;
        height: 4px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
      }
    }
  }
}
</style>
