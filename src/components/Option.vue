<template>
    <div class="option-editor">
      <h3>组件设置</h3>
      <div class="options-list">
        <el-row>
          <el-col :span="6" class="option-item-label">内容：</el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
              @change="handleText"
            >
            </el-input>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {},
  computed: {
    ...mapGetters(['selectCompont']),
  },
  data() {
    return {
      textarea: '',
    };
  },
  methods: {
    handleText(v) {
      this.selectCompont.data.options.text = v;
    },
  },
};
</script>
<style lang="less" scoped>
.option-editor {
    width: 360px;
    box-shadow: -4px 0px 6px rgba(221, 221, 221, 0.445);
    padding: 20px;
    .options-list {
      .option-item-label {
        text-align: right;
      }
    }
}
</style>
