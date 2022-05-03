<template>
  <div>
    <el-row class="option-row">
      <el-col :span="6" class="option-item-label">{{ typeOptions.getDataType.label }}：</el-col>
      <el-col :span="18">
        <CSelectGroupVue
          v-model="typeValue"
          v-bind="typeOptions.getDataType.componentAttr"
        />
      </el-col>
    </el-row>
    <el-row v-if="typeValue === 'static'" class="option-row">
      <el-col :span="6" class="option-item-label">{{ typeOptions.chartJsonData.label }}：</el-col>
      <el-col :span="18">
        <vue-json-editor
          v-model="curValue"
          :expandedOnStart="false"
          mode="code"
          :show-btns="true"
          @json-save="onJsonChange"
        />
      </el-col>
    </el-row>
    <el-row v-else class="option-row">
      <el-col :span="6" class="option-item-label">{{ typeOptions.tableDataUrl.label }}：</el-col>
      <el-col :span="18">
        <el-input
          v-model="curUrl"
          v-bind="typeOptions.tableDataUrl.componentAttr"
          @blur="handleGetDataByUrl"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import vueJsonEditor from 'vue-json-editor';
import CSelectGroupVue from './CSelectGroup.vue';

export default {
  components: {
    vueJsonEditor,
    CSelectGroupVue,
  },
  props: {
    value: {
      type: Object,
      require: true,
      default: null,
    },
    typeOptions: {
      type: Object,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      typeValue: this.value.getDataType,
      curValue: this.value.chartJsonData,
      curUrl: this.value.tableDataUrl,
    };
  },
  watch: {
    typeValue(newV) {
      this.$emit('input', {
        ...this.value,
        getDataType: newV,
      });
    },
  },
  mounted() {
  },
  methods: {
    onJsonChange(val) {
      this.$emit('input', {
        ...this.value,
        chartJsonData: val,
      });
    },
    handleGetDataByUrl() {
      this.$emit('input', {
        ...this.value,
        tableDataUrl: this.curUrl,
      });
    },
  },
};
</script>

<style>
.option-row {
  margin-bottom: 10px;
}
</style>
