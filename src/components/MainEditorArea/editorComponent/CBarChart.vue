<template>
    <div
      class="barchart-box"
      :style="boxStyle"
    >
        <v-chart ref="chart" class="main"
          :option="BarChartOption"
          :autoresize="true">
        </v-chart>
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
      return {
      };
    },
    options() {
      return this.data.data.options;
    },
    BarChartOption() {
      const { chartData, title } = this.options.chartOption;
      return {
        title,
        tooltip: {},
        xAxis: {
          data: chartData.map((v) => v.x),
        },
        yAxis: {},
        series: [{
          type: 'bar',
          data: chartData.map((v) => v.y),
        }],
      };
    },
  },
  mounted() {
    // this.initEchart();
  },
  data() {
    return {
    };
  },
  methods: {
    initEchart() {
    },
  },
};
</script>
<style lang="less" scoped>
.barchart-box {
  caret-color: transparent;
  overflow: auto;
  height: 100%;
  width: 100%;
  .main {
    height: 100%;
    width: 100%;
  }
}
</style>
