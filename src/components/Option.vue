<template>
    <div
      v-if="editorLayout.length && selectCompont && selectCompont.id" :key="selectCompont.id"
      class="option-editor"
    >
      <h3>组件设置</h3>
      <div class="options-list">
        <el-row :gutter="20" class="option-row">
            <el-col :span="6" class="option-item-label">组件名称：</el-col>
            <el-col :span="18">
                <el-input v-model.number="selectCompont.name" size="mini">
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="option-row">
            <el-col :span="6" class="option-item-label">背景颜色：</el-col>
            <el-col :span="18">
                <c-color-picker v-model="selectCompont.bgcolor"></c-color-picker>
            </el-col>
        </el-row>
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
        <el-row v-for="item in componentOptions.filter((v) => !v.childComponent)"
          :key="item.style_id"
          class="option-row"
        >
          <el-col
            :span="6"
            class="option-item-label"
          >{{ `${item.style_label}：` }}</el-col>
          <el-col :span="18">
            <component
              :is="item.component"
              v-model="options[item.style_id]"
              v-bind="item.componentAttr"
            />
          </el-col>
        </el-row>
        <el-row v-for="item in componentOptions.filter((v) => v.childComponent)"
          :key="item.style_id"
          class="option-row"
        >
          <el-col :span="24">
            <component
              :is="item.component"
              v-model="options[item.style_id]"
              :typeOptions="item.childComponent"
            />
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else class="option-editor">
      未选中组件
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { codemirror } from 'vue-codemirror';
import vueJsonEditor from 'vue-json-editor';
import CustomComponents from './CustomComponent/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'codemirror/lib/codemirror.css';

export default {
  props: {},
  components: {
    // eslint-disable-next-line vue/no-unused-components
    codemirror,
    // eslint-disable-next-line vue/no-unused-components
    vueJsonEditor,
    ...CustomComponents,
  },
  computed: {
    ...mapGetters(['editorLayout', 'selectCompont']),
    options() {
      return this.selectCompont ? this.selectCompont.data.componentData : null;
    },
    componentOptions() {
      return this.selectCompont ? this.selectCompont.data.componentStyle : null;
    },
  },
  data() {
    return {
      curTableData: '',
    };
  },
  watch: {
    options(newVal) {
      if (newVal && newVal.tableData) {
        this.curTableData = JSON.stringify(newVal.tableData || '', null, 2);
      }
    },
  },
  methods: {
    handleSetTableData() {
      this.options.tableData = JSON.parse(this.curTableData);
    },
    async handleGetData() {
      // const res = await this.$axios.get(this.options.tableDataUrl);
      this.options.tableData = [{
        a: '你好',
      }, {
        a: '这就是一个测试',
      }];
    },
    onJsonChange(v) {
      this.options.chartOption.chartData = v;
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
        text-align: left;
        white-space: nowrap;
      }
      .option-row {
        margin-bottom: 10px;
      }
    }
}
</style>
