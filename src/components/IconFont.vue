<template>
  <i
    class="iconfont"
    :title="title"
    :style="mStyle"
    v-html="code"
  />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
    },
    code: {
      type: String,
      require: false,
    },
    size: {
      type: [Number, String],
      require: false,
    },
    color: {
      type: String,
      require: false,
    },
  },
  computed: {
    mStyle() {
      // eslint-disable-next-line no-underscore-dangle
      const _style = {};
      if (this.color) {
        _style.color = this.color;
      }
      if (this.size) {
        _style.fontSize = `${this.size.toString()}px`;
      }
      return _style;
    },
  },
};
</script>
