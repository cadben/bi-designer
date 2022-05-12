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
        textAlign,
        fontNormal,
        fourBorderRadius,
      } = this.options;
      const {
        bold, italic, underLine,
      } = fontNormal;
      const { bgcolor } = this.data;
      const {
        left,
        right,
        top,
        bottom,
      } = fourBorderRadius;
      return {
        // color,
        fontSize: `${fontSize}px`,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underLine ? 'underline' : 'none',
        textAlign,
        backgroundColor: bgcolor,
        borderRadius: `${top}px ${right}px ${bottom}px ${left}px`,
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
