<template>
    <div
      :style="boxStyle"
    >
        {{ options.text }}
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
        color,
        fontSize,
        fontFamily,
        bold,
        italic,
        textAlign,
      } = this.options;
      return {
        color,
        fontSize: `${fontSize}px`,
        fontFamily,
        bold,
        italic,
        textAlign,
      };
    },
    options() {
      console.log(this.data.data.options);
      return this.data.data.options;
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
.dragArea {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
