<template>
    <div
      class="carousel-box"
      :style="boxStyle"
    >
      <div class="box">
        <div
          v-for="item in chartOptions.getDataType === 'static' ?
          chartOptions.chartJsonData : apiData"
          :key="item"
          class="carousel-item">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="box">
        <div
          v-for="item in chartOptions.getDataType === 'static' ?
          chartOptions.chartJsonData : apiData"
          :key="item"
          class="carousel-item">
          <span>{{ item }}</span>
        </div>
      </div>
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
  watch: {
    // eslint-disable-next-line func-names
    'chartOptions.getDataType': function (newV) {
      if (newV === 'get') {
        this.$axios.get(this.chartOptions.tableDataUrl).then((res) => {
          this.apiData = res;
        });
      }
    },
    // eslint-disable-next-line func-names
    'chartOptions.tableDataUrl': function (newUrl) {
      if (this.chartOptions.getDataType === 'get') {
        this.$axios.get(newUrl).then((res) => {
          this.apiData = res;
        });
      }
    },
  },
  computed: {
    boxStyle() {
      const {
        fourBorderRadius,
      } = this.normalOptions;
      const {
        left,
        right,
        top,
        bottom,
      } = fourBorderRadius;
      const { bgcolor } = this.data;
      return {
        backgroundColor: bgcolor,
        borderRadius: `${top}px ${right}px ${bottom}px ${left}px`,
      };
    },
    normalOptions() {
      return this.data.data.componentData;
    },
    chartOptions() {
      return this.data.data.componentData.dataOptions;
    },
  },
  mounted() {
  },
  data() {
    return {
      apiData: [],
    };
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.carousel-box {
  caret-color: transparent;
  overflow: hidden;
  height: 100%;
  width: 100%;
  .box {
    height: 100%;
    width: 100%;
    animation: liMove 4s linear infinite;
    display: flex;
    flex-direction: column;
  }
  .carousel-item {
    font-size: 16px;
    padding: 0px 20px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // position: relative;
    // &::before {
    //   content: '';
    //   width: 2px;
    //   height: 10px;
    //   position: absolute;
    //   left: 0px;
    //   top: 0px;
    //   background: #3399ff;
    // }
    // height: 36px;
    // animation: liMove 1.2s infinite;
  }
  @keyframes liMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -100%);
    }
  }
}
</style>
