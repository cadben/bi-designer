<template>
  <div class="color-picker">
    <el-popover
      v-model="currentColor"
      placement="bottom"
      width="254"
      trigger="manual"
    >
      <sketch-pick
        :model="currentColor"
        :preset-colors="presetColors"
      >
      </sketch-pick>
      <span slot="reference" @click="handleShowColorPicker">
        选择颜色
        <div class="color-preview" :style="`backgroundColor: ${currentColor}`"></div>
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
      presetColors: ['#D20000', '#FF0000', '#FFA200', '#EBDF00', '#7ED332', '#00B442'],
    };
  },
  methods: {
    handleShowColorPicker() {
      this.showPickColor = true;
    },
  },
};
</script>

<style>
/* .color-picker {
} */
</style>
