import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editorLayout: [],
    componentLists: [],
  },
  mutations: {
    set_editorLayout: (state, payload) => {
      state.editorLayout = payload.editorLayout;
    },
    addComponent: (state, payload) => {
      state.editorLayout.push(payload);
    },
  },
  actions: {
    handleAddComponent({ commit, state }, componentName) {
      console.log(componentName);
      let initData = {};
      if (!componentName) {
        return;
      }
      if (componentName === 'text') {
        initData = {
          type: 'text',
          options: {
            text: '请输入文字',
            color: '#000000',
            fontSize: 12,
            fontFamily: 'ZCOOL QingKe HuangYou',
            bold: false,
            textAlign: 'left',
          },
        };
      } else if (componentName === 'table') {
        initData = {
          type: 'table',
          options: {
            getDataType: 'static',
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
            }],
            tableDataUrl: 'http://is.snssdk.com/api/news/feed/v51/',
          },
        };
      } else if (componentName === 'image') {
        initData = {
          type: 'image',
          options: {
            imgUrl: 'https://github.com/cadben/images_store/blob/master/img/4YT4k5.png?raw=true',
            showType: 'full',
          },
        };
      } else if (componentName === 'bar') {
        initData = {
          type: 'bar',
          options: {
            getDataType: 'static',
            chartOption: {
              title: {
                text: 'ECharts 入门示例',
              },
              chartData: [
                {
                  y: '5',
                  x: '手机',
                },
                {
                  y: '20',
                  x: '电脑',
                },
                {
                  y: '50',
                  x: '笔',
                },
                {
                  y: '10',
                  x: '书本',
                },
                {
                  y: '10',
                  x: '衣服',
                },
              ],
            },
            chartDataUrl: 'http://is.snssdk.com/api/news/feed/v51/',
          },
        };
      }

      const component = {
        name: `新建图层${state.editorLayout.length + 1}`,
        x: 10,
        y: 10,
        width: 400,
        height: 200,
        bgcolor: initData.bgcolor || 'rgba(0,0,0,0)',
        active: false,
        data: initData,
        id: Math.random(),
      };
      commit('addComponent', component);
    },
  },
  getters: {
    editorLayout: (state) => state.editorLayout,
    selectCompont: (state) => state.editorLayout.find((v) => v.active === true),
  },
});
