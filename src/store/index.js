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
            italic: false,
            stroke: false,
            strokeColor: '#ffffff',
            strokeSize: 2,
            shadow: false,
            shadowColor: '#ff0000',
            shadowBlur: 10,
            scroll: false,
            scrollSpeed: 50,
            openlink: false,
            linkTarget: '_blank',
            linkHref: '',
            lineHeight: 50,
            backgroundColor: 'rgba(100,100,0,0.5)',
            textAlign: 'left',
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
