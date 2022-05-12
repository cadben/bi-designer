<template>
    <div
      class="table-box"
      :style="boxStyle"
    >
      <el-table :data="tableRes.resData">
          <el-table-column
            v-for="item in tableRes.resColumn" :key="item" :label="item" :prop="item">
          </el-table-column>
      </el-table>
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
      const { bgcolor } = this.data;
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
        backgroundColor: bgcolor,
        borderRadius: `${top}px ${right}px ${bottom}px ${left}px`,
      };
    },
    options() {
      return this.data.data.componentData;
    },
    tableRes() {
      // eslint-disable-next-line no-constant-condition
      if (true) {
        return {
          resData: this.options.tableData,
          resColumn: Object.keys(this.options.tableData[0]),
        };
      }
      return [];
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
.table-box {
  caret-color: transparent;
  overflow: auto;
  height: 100%;
  width: 100%;
}
</style>
