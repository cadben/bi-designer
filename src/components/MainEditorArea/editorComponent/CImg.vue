<template>
    <div
      class="img-box"
      :style="boxStyle"
    >
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
        fourBorderRadius,
      } = this.options;
      const {
        left,
        right,
        top,
        bottom,
      } = fourBorderRadius;
      return {
        backgroundImage: `url(${this.options.imgUrl})`,
        backgroundRepeat: `${this.options.showType === 'full' ? 'repeat' : 'no-repeat'}`,
        backgroundSize: `${this.options.showType === 'full' ? 'contain' : 'cover'}`,
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
.img-box {
  caret-color: transparent;
  overflow: auto;
  height: 100%;
  width: 100%;
}
</style>
