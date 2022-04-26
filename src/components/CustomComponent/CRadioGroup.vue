<template>
    <el-radio-group
      v-model="options.data"
      size="mini"
    >
      <el-radio-button
        v-for="item in options.option"
        :key="item.key"
        :lebel="item.key"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
</template>
<template>

</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      require: false,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>
