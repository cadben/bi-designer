<template>
  <div class="color-picker">
    <el-popover
      v-model="showPickColor"
      placement="bottom"
      trigger="manual"
      popper-class="color-popover"
    >
      <sketch-pick
        :value="currentColor"
        :preset-colors="presetColors"
        @input="handleChangeColor"
      >
      </sketch-pick>
      <span
        slot="reference"
        @click="handleShowColorPicker"
        class="color-preview" :style="`backgroundColor: ${currentColor}`">
      </span>
    </el-popover>
  </div>
</template>
<script>
import { Sketch } from 'vue-color';

export default {
  components: {
    'sketch-pick': Sketch,
  },
  props: {
    value: {
      type: String,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      currentColor: this.value,
      showPickColor: false,
      presetColors: ['#D20000', '#FF0000', '#FFA200', '#EBDF00', '#7ED332', '#00B442', '#010192', '#fff192'],
    };
  },
  methods: {
    handleShowColorPicker(e) {
      e.stopPropagation();
      this.showPickColor = true;
      document.addEventListener('click', () => {
        this.showPickColor = false;
      });
    },
    handleChangeColor(color) {
      const { hex8 } = color;
      this.currentColor = hex8;
      this.$emit('input', hex8);
    },
  },
};
</script>

<style lang="less">
.color-popover {
  padding: 0px;
}
.color-preview {
  display: block;
  width: 80px;
  height: 20px;
  border: 2px solid rgba(102, 102, 102, 0.747);
  caret-color: transparent;
}
</style>
