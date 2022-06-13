<template>
    <div class="components-box">
      <div class="header-logo">
        CEditor
      </div>
      <div class="container">
        <div class="container-header">组件库</div>
            <el-collapse>
                <el-collapse-item title="基础组件" name="1">
                  <div
                    v-for="item in cList.filter(v => v.type === 'normal')"
                    :key="item.name"
                    class="component-card"
                    draggable="true"
                    @dragstart="(e) => handleDragStart(e, item)"
                  >
                    <div class="card-top"
                      :style="{
                        width: '100%',
                        height: '100%',
                        background: `url(${item.imgSrc})`,
                        backgroundSize: '40%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }"
                    >
                    </div>
                    <div class="card-bottom">
                      {{ item.label }}
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="数据展示组件" name="2">
                  <div
                    v-for="item in cList.filter(v => v.type === 'chart')"
                    :key="item.name"
                    class="component-card"
                    draggable="true"
                    @dragstart="(e) => handleDragStart(e, item)"
                  >
                    <div class="card-top"
                      :style="{
                        width: '100%',
                        height: '100%',
                        background: `url(${item.imgSrc})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }"
                    >
                    </div>
                    <div class="card-bottom">
                      {{ item.label }}
                    </div>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="特色组件" name="3">
                  <div
                    v-for="item in cList.filter(v => v.type === 'custom')"
                    :key="item.name"
                    class="component-card"
                    draggable="true"
                    @dragstart="(e) => handleDragStart(e, item)"
                  >
                    <div class="card-top"
                      :style="{
                        width: '100%',
                        height: '100%',
                        background: `url(${item.imgSrc})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }"
                    >
                    </div>
                    <div class="card-bottom">
                      {{ item.label }}
                    </div>
                  </div>
                </el-collapse-item>
            </el-collapse>
      </div>
    </div>
</template>
<script>
export default {
  props: {},
  components: {
  },
  data() {
    return {
      cList: [
        {
          name: 'text',
          label: '文本框',
          type: 'normal',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/%E6%96%87%E6%9C%AC.png',
        },
        {
          name: 'table',
          label: '表格',
          type: 'normal',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor%2F%E8%A1%A8%E6%A0%BC.png',
        },
        {
          name: 'image',
          label: '图片',
          type: 'normal',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/%E5%9B%BE%E7%89%87.png',
        },
        {
          name: 'rect',
          label: '矩形',
          type: 'normal',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/202205161702959.png',
        },
        {
          name: 'bar',
          label: '柱状图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/bar-simple.webp?e=1651381479&token=9rPdsMX3D4ANa5yaN6J-PsinXDmd6xMP185zAzTo:JNm6-OFTeGYyDoOMdjAeRSAo_30=',
        },
        {
          name: 'line',
          label: '折线图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/line-simple.webp?e=1651381479&token=9rPdsMX3D4ANa5yaN6J-PsinXDmd6xMP185zAzTo:OqfljJSOl7FGDsvPFvdIh9eGEHA=',
        },
        {
          name: 'pie',
          label: '饼图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/pie-simple.webp?e=1651381479&token=9rPdsMX3D4ANa5yaN6J-PsinXDmd6xMP185zAzTo:Ye_nMzrKbiXumZlZjkUBRQHTdXQ=',
        },
        {
          name: 'area',
          label: '面积图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/area-basic.webp?e=1651381479&token=9rPdsMX3D4ANa5yaN6J-PsinXDmd6xMP185zAzTo:NTp4Bm2jA4-3duGQSeWZkBf7p7k=',
        },
        {
          name: 'funnel',
          label: '漏斗图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/funnel.webp',
        },
        {
          name: 'radar',
          label: '雷达图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/202205172113610.png',
        },
        {
          name: 'sankey',
          label: '桑基图',
          type: 'chart',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/202205172111857.png',
        },
        {
          name: 'carousel',
          label: '文本轮播滚动',
          type: 'custom',
          imgSrc: 'http://rb6rk8283.hd-bkt.clouddn.com/editor/%E6%96%87%E6%9C%AC.png',
        },
      ],
    };
  },
  methods: {
    handleDragStart(e, data) {
      e.dataTransfer.setData('componentId', data.name);
    },
  },
};
</script>
<style lang="less" scoped>
.components-box {
  width: 355px;
  box-shadow: 4px 0px 6px rgba(221, 221, 221, 0.726);
  .header-logo {
    padding: 20px;
    border-bottom: .02666667rem solid #ebedf0;
  }
  .container {
    .container-header {
      padding: 20px;
    }
    // /deep/ .el-collapse {
    //   overflow: auto;
    // }
    /deep/ .el-collapse-item__header {
      padding-left: 20px;
    }
    /deep/ .el-collapse-item__content {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
    }
    .drag {
      display: flex;
      flex-wrap: wrap;
    }
    .component-card {
      width: 145px;
      height: 98px;
      display: flex;
      margin-right: 11px;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 0.2s linear;
      cursor: pointer;
      overflow: hidden;
      box-shadow: 0 0 5px 0 #dcdade;
      border-radius: 4px;
      &:hover {
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 16%),
        0 3px 6px 0 rgba(0, 0, 0, 12%),
        0 5px 12px 4px rgba(0, 0, 0, 9%);
        .card-top {
          transform: scale(1.2);
        }
      }
      &:last-child {
        margin-right: auto;
      }
      .card-top {
        font-size: 15px;
        color: #000;
        font-family:'Gill Sans', 'Gill Sans MT',
        Calibri, 'Trebuchet MS', sans-serif;
        transition: 0.2s linear;
      }
      .card-bottom {
        padding: 5px 0px;
        color: #5c5b5b;
      }
    }
  }
}
</style>
