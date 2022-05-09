<template>
  <div>
    <span
      v-for="(item, index) in Object.keys(value)"
      :key="item"
      :class="`normal-class ${value[item] ? 'active-btn' : ''}`"
      @click="handleChangeVal(item)"
    >
      <icon-font
        :size="20"
        :code="code[index]"
      ></icon-font>
    </span>
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
    code: {
      type: Array,
      require: true,
      default: null,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    handleChangeVal(type) {
      console.log({
        ...this.value,
        [type]: !this.value[type],
      });
      this.$emit('input', {
        ...this.value,
        [type]: !this.value[type],
      });
    },
  },
};
</script>

<style>
.normal-class {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
}
.active-btn {
  background: #e9f1ff;
}
</style>
