<template>
    <div
      class="sankeychart-box"
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
      // const yData = [...new Set(
      //   [...chartdata.map((v) => v.source), ...chartdata.map((v) => v.target)],
      // )];
      const left = chartdata.map((v) => ({
        name: v.source,
        label: { position: 'left' },
      }));
      const right = chartdata.map((v) => ({
        name: v.target,
        label: { position: 'right' },
      }));
      const yData = [...this._.uniqBy(left, 'name'), ...this._.uniqBy(right, 'name')];
      const res = {
        title: {
          text: title,
          left: 'center',
        },
        color: ['#7BC074', '#709EF1', '#3399ff'],
        series: [
          {
            type: 'sankey',
            draggable: false,
            left: '8%',
            right: '8%',
            data: yData,
            links: chartdata,
            label: {
              normal: {
                color: 'rgba(9, 27, 61, 0.6)',
                fontSize: 14,
                fontWeight: '400',
              },
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: '#aaa',
              },
            },
            lineStyle: {
              normal: {
                color: 'gradient',
                borderColor: 'black',
                borderWidth: 0,
                opacity: 0.3,
                curveness: 0.6,
              },
            },
          },
        ],
      };
      console.log(yData, chartdata);
      return res;
    },
  },
};
</script>
<style lang="less" scoped>
.sankeychart-box {
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
