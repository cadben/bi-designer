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
      const yData = chartData.reduce((pre, cur) => {
        const yName = cur['类型'];
        const isExist = pre.find((v) => v.name === yName);
        if (!isExist) {
          pre.push({
            name: yName,
            data: [cur['数据']],
          });
        } else {
          isExist.data.push(cur['数据']);
        }
        return pre;
      }, []);
      return {
        title,
        tooltip: {},
        xAxis: {
          data: [...new Set(chartData.map((v) => v['名称']))],
        },
        yAxis: {},
        series: yData.map((item) => ({
          ...item,
          type: 'bar',
        })),
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
