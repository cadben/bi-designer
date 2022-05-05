<template>
  <div
    v-if="rightContextConfig.showRightContextId"
    class="rightBar"
    :style="rightContextStyle"
  >
    <div class="bar-item" @click="handleDeleteCompoent">
        <i class="el-icon-delete"></i>
        删除
    </div>
    <div class="bar-item" @click="handleCopyCompoent">
        <i class="el-icon-copy-document"></i>
        复制
    </div>
    <div class="bar-item" @click="handleTopCompoent">
        <i class="el-icon-top"></i>
        置顶
    </div>
    <div class="bar-item" @click="handleBottomCompoent">
        <i class="el-icon-bottom"></i>
        置底
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rightContextConfig: {
      type: Object,
      require: true,
      default: null,
    },
    rightContextStyle: {
      type: Object,
      require: true,
      default: null,
    },
  },
  methods: {
    handleDeleteCompoent() {
      this.$emit('handleDeleteCompoent');
    },
    handleCopyCompoent() {
      this.$emit('handleCopyCompoent');
    },
    handleTopCompoent() {
      this.$emit('handleTopCompoent');
    },
    handleBottomCompoent() {
      this.$emit('handleBottomCompoent');
    },
  },
};
</script>
<style lang="less" scoped>
.rightBar {
  width: 120px;
  padding: 10px 0px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.096);
  position: absolute;
  .bar-item {
    transition: 0.2s linear;
    padding: 10px 15px;
    font-size: 13px;
    &:hover {
      cursor: pointer;
      color: #409eff;
      background-color: #ecf5ff;
    }
  }
}
</style>
