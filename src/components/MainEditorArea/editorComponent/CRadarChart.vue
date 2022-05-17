<template>
    <div
      class="radarChart-box"
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
      const {
        label,
        data,
      } = chartdata;
      const yData = data.map((v) => ({
        value: v.value,
        name: v.id,
      }));
      const res = {
        title: {
          text: title,
          left: 'center',
        },
        color: ['#3D91F7', '#61BE67'],
        tooltip: {
          show: true, // 弹层数据去掉
          formatter({ name, dataIndex, value }) {
            return `${name} <br/> ${label[dataIndex].name}: ${value[dataIndex]}`;
          },
        },
        legend: {
          show: false,
        },
        radar: {
          center: ['50%', '50%'], // 外圆的位置
          radius: '55%',
          name: {
            textStyle: {
              color: '#000',
              fontSize: 16,
              fontWeight: 400,
              fontFamily: 'PingFangSC-Regular,PingFang SC',
              fontStyle: 'normal',
            },
          },
          // TODO:
          indicator: label,
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
              // 分隔区域的样式设置。
              color: ['#1c2330'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
          },
          axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
              color: '#167374',
            },
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#167374', // 分隔线颜色
              width: 1, // 分隔线线宽
            },
          },
        },
        series: [
          {
            type: 'radar',
            symbolSize: 10,
            itemStyle: {
              borderColor: 'rgba(66, 242, 185, 1)',
              color: '#fff',
              borderWidth: 0.2,
            },
            lineStyle: {
              normal: {
                width: 1,
                color: 'rgba(66, 242, 185, 1)',
              },
            },
            data: yData,
          },
        ],
      };
      return res;
    },
  },
};
</script>
<style lang="less" scoped>
.radarChart-box {
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
