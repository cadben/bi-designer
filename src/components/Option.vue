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
        <el-row v-if="options.text != undefined" class="option-row">
          <el-col :span="6" class="option-item-label">内容：</el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="options.text"
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
        <el-row v-if="options.getDataType" class="option-row">
          <el-col :span="6" class="option-item-label">获取方式：</el-col>
          <el-col :span="18">
            <el-select
              v-model="options.getDataType"
              size="mini"
            >
              <el-option value="static" label="静态数据" />
              <el-option value="get" label="API(GET)" />
            </el-select>
          </el-col>
        </el-row>
        <el-row v-if="options.tableData && options.getDataType === 'static'" class="option-row">
          <el-col :span="6" class="option-item-label">内容：</el-col>
          <el-col :span="18">
            <!-- <el-input
              type="textarea"
              :rows="10"
              v-model="curTableData"
              @blur="handleSetTableData"
            >
            </el-input> -->
            <codemirror
              v-model="curTableData"
              :options="{
                tabSize: 2,
                mode: 'text/javascript',
                theme: 'base16-dark',
                lineNumbers: true,
                line: true,
              }"
              @blur="handleSetTableData"
            />
          </el-col>
        </el-row>
        <el-row
          v-if="options.tableDataUrl != undefined && options.getDataType === 'get'"
          class="option-row"
        >
          <el-col :span="6" class="option-item-label">API接口：</el-col>
          <el-col :span="18">
            <el-input
              size="mini"
              v-model="options.tableDataUrl"
            >
            </el-input>
            <el-button @click="handleGetData" style="marginTop: 10px;">刷新数据</el-button>
          </el-col>
        </el-row>
        <el-row v-if="options.showType" class="option-row">
          <el-col :span="6" class="option-item-label">获取方式：</el-col>
          <el-col :span="18">
            <el-select
              v-model="options.showType"
              size="mini"
            >
              <el-option value="full" label="平铺" />
              <el-option value="cover" label="拉伸" />
            </el-select>
          </el-col>
        </el-row>
        <el-row
          v-if="options.imgUrl"
          class="option-row"
        >
          <el-col :span="6" class="option-item-label">图片URL：</el-col>
          <el-col :span="18">
            <el-input
              size="mini"
              v-model="options.imgUrl"
            >
            </el-input>
          </el-col>
        </el-row>
        <el-row v-if="options.chartOption && options.getDataType === 'static'" class="option-row">
          <el-col :span="6" class="option-item-label">内容：</el-col>
          <el-col :span="18">
            <vue-json-editor
              v-model="options.chartOption.chartJsonData"
              :expandedOnStart="false"
              mode="code"
              :show-btns="true"
              @json-save="onJsonChange"
            />
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { codemirror } from 'vue-codemirror';
import vueJsonEditor from 'vue-json-editor';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'codemirror/lib/codemirror.css';

export default {
  props: {},
  components: {
    codemirror,
    vueJsonEditor,
  },
  computed: {
    ...mapGetters(['selectCompont']),
    options() {
      return this.selectCompont ? this.selectCompont.data.options : null;
    },
  },
  data() {
    return {
      curTableData: '',
    };
  },
  watch: {
    options(newVal) {
      if (newVal.tableData) {
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
      console.log(v);
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
