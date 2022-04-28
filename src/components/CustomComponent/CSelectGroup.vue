<template>
    <el-select
      v-model="curValue"
      @change="handleChangeVal"
      v-bind="$attrs"
    >
      <el-option v-for="item in options"
        :key="item.key"
        :value="item.key"
        :label="item.label"
      />
    </el-select>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      require: true,
      default: null,
    },
    options: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      curValue: this.value,
    };
  },
  methods: {
    handleChangeVal(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style>

</style>
