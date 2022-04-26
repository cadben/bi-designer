<template>
    <div
      class="text-box"
      :style="boxStyle"
    >
      <div>{{ options.text }}</div>
    </div>
</template>
<script>

export default {
  props: {
    data: {
      type: Object,
      require: true,
      default: null,
    },
  },
  components: {
  },
  computed: {
    boxStyle() {
      const {
        // color,
        fontSize,
        // bold,
        textAlign,
      } = this.options;
      return {
        // color,
        fontSize: `${fontSize}px`,
        // fontWeight: bold ? 'bold' : 'normal',
        textAlign,
      };
    },
    options() {
      return this.data.data.componentData;
    },
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.text-box {
  caret-color: transparent;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
