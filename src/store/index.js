import Vue from 'vue';
import Vuex from 'vuex';
import * as Config from './component.config';

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
    handleAddComponent({ commit, state }, { componentName, x, y }) {
      if (!componentName) {
        return;
      }
      const newObject = JSON.parse(JSON.stringify(Config[componentName.toUpperCase()]));
      const component = {
        ...newObject,
        name: `新建图层${state.editorLayout.length + 1}`,
        x: x || 10,
        y: y || 10,
        width: 400,
        height: 200,
        bgcolor: 'rgba(0,0,0,0)',
        active: false,
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
