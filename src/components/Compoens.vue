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
              <div class="card-top">
                {{ item.label }}
              </div>
              <div class="card-bottom">
                {{ item.name }}
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
              <div class="card-top">
                {{ item.label }}
              </div>
              <div class="card-bottom">
                {{ item.name }}
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
        },
        {
          name: 'table',
          label: '表格',
          type: 'normal',
        },
        {
          name: 'image',
          label: '图片',
          type: 'normal',
        },
        {
          name: 'bar',
          label: '柱状图',
          type: 'chart',
        },
        {
          name: 'line',
          label: '折线图',
          type: 'chart',
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
  width: 350px;
  box-shadow: 4px 0px 6px rgba(221, 221, 221, 0.726);
  .header-logo {
    padding: 20px;
    border-bottom: .02666667rem solid #ebedf0;
  }
  .container {
    .container-header {
      padding: 20px;
    }
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
      width: 90px;
      height: 90px;
      display: flex;
      margin-right: 11px;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: .02666667rem solid #ebedf0;
      transition: 0.2s linear;
      cursor: pointer;
      &:hover {
        border-color: transparent;
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 16%),
        0 3px 6px 0 rgba(0, 0, 0, 12%),
        0 5px 12px 4px rgba(0, 0, 0, 9%);
      }
      &:last-child {
        margin-right: auto;
      }
      .card-top {
        font-size: 15px;
        color: #000;
        font-family:'Gill Sans', 'Gill Sans MT',
        Calibri, 'Trebuchet MS', sans-serif;
      }
      .card-bottom {
        color: #aaaaaa;
      }
    }
  }
}
</style>
