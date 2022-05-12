<template>
    <div
      class="piechart-box"
      :style="boxStyle"
    >
        <v-chart ref="chart" class="main"
          :option="chartOptions.getDataType === 'static' ? BarChartOption : apiData"
          :autoresize="true">
        </v-chart>
    </div>
</template>
<script>

export default {
  props: {
    data: {
      type: Object,
      require: false,
      default: null,
    },
  },
  components: {
  },
  watch: {
    // eslint-disable-next-line func-names
    'chartOptions.getDataType': function (newV) {
      if (newV === 'get') {
        this.$axios.get(this.chartOptions.tableDataUrl).then((res) => {
          const showRes = this.initEchart(res.data);
          this.apiData = showRes;
        });
      }
    },
    // eslint-disable-next-line func-names
    'chartOptions.tableDataUrl': function (newUrl) {
      if (this.chartOptions.getDataType === 'get') {
        this.$axios.get(newUrl).then((res) => {
          const showRes = this.initEchart(res.data);
          this.apiData = showRes;
        });
      }
    },
  },
  computed: {
    boxStyle() {
      const { bgcolor } = this.data;
      const {
        fourBorderRadius,
      } = this.normalOptiosn;
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
    normalOptiosn() {
      return this.data.data.componentData;
    },
    chartOptions() {
      return this.data.data.componentData.dataOptions;
    },
    BarChartOption() {
      const { chartJsonData } = this.chartOptions;
      const res = this.initEchart(chartJsonData);
      return res;
    },
  },
  data() {
    return {
      apiData: {},
    };
  },
  methods: {
    initEchart(chartdata) {
      const { title } = this.normalOptiosn;
      const yData = chartdata.map((v) => ({
        name: v['名称'],
        value: v['数据'],
      }));
      const res = {
        title: {
          text: title,
          left: 'center',
        },
        tooltip: {},
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Pie From',
            type: 'pie',
            data: yData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      return res;
    },
  },
};
</script>
<style lang="less" scoped>
.piechart-box {
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
