<template>
    <div v-if="selectCompont && selectCompont.id" class="option-editor">
      <h3>组件设置</h3>
      <div class="options-list">
        <el-row :gutter="20" class="option-row">
            <el-col :span="6" class="option-item-label">组件位置：</el-col>
            <el-col :span="9">
                <el-input v-model.number="selectCompont.x" size="mini">
                    <template slot="prepend">x</template>
                </el-input>
            </el-col>
            <el-col :span="9">
                <el-input v-model.number="selectCompont.y" size="mini">
                    <template slot="prepend">y</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="option-row">
            <el-col :span="6" class="option-item-label">组件大小：</el-col>
            <el-col :span="9">
                <el-input v-model.number="selectCompont.width" size="mini">
                    <template slot="prepend">w</template>
                </el-input>
            </el-col>
            <el-col :span="9">
                <el-input v-model.number="selectCompont.height" size="mini">
                    <template slot="prepend">h</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row v-if="textarea" class="option-row">
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
        <el-row v-if="options.fontSize" class="option-row">
          <el-col :span="6" class="option-item-label">字号：</el-col>
          <el-col :span="18">
            <el-input-number
              type="number"
              size="mini"
              v-model="options.fontSize"
              controls-position="right"
              :min="12"
              :max="48"
            >
            </el-input-number>
          </el-col>
        </el-row>
        <el-row v-if="options.textAlign" class="option-row">
          <el-col :span="6" class="option-item-label">位置：</el-col>
          <el-col :span="18">
            <el-radio-group
              v-model="options.textAlign"
              size="mini"
            >
              <el-radio-button label="left">左</el-radio-button>
              <el-radio-button label="center">中</el-radio-button>
              <el-radio-button label="right">右</el-radio-button>
            </el-radio-group>
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
    options() {
      return this.selectCompont ? this.selectCompont.data.options : null;
    },
  },
  data() {
    return {
      textarea: '',
    };
  },
  mounted() {
    this.textarea = this.options?.text;
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
        white-space: nowrap;
      }
      .option-row {
        margin-bottom: 10px;
      }
    }
}
</style>
