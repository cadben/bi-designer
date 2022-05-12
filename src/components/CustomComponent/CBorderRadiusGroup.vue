<template>
  <div>
    <el-row :gutter="20" class="option-row">
      <el-col :span="12">
          <el-input v-model.number="value.top" size="mini">
              <template slot="prepend">
                <icon-font code="&#xeb03;" :size="16"></icon-font>
              </template>
          </el-input>
      </el-col>
      <el-col :span="12">
          <el-input v-model.number="value.right" size="mini">
              <template slot="prepend">
                <icon-font code="&#xeb06;" :size="16"></icon-font>
              </template>
          </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="option-row">
      <el-col :span="12">
          <el-input v-model.number="value.left" size="mini">
              <template slot="prepend">
                <icon-font code="&#xeb04;" :size="16"></icon-font>
              </template>
          </el-input>
      </el-col>
      <el-col :span="12">
          <el-input v-model.number="value.bottom" size="mini">
              <template slot="prepend">
                <icon-font code="&#xeb05;" :size="16"></icon-font>
              </template>
          </el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.option-row {
  margin-bottom: 10px;
}
</style>
