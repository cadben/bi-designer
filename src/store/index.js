import Vue from 'vue';
import Vuex from 'vuex';
import { uuid } from 'uuidv4';
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
    deleteComponent: (state, payload) => {
      state.editorLayout = state.editorLayout.filter((compoent) => payload !== compoent.id);
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
        id: uuid(),
      };
      commit('addComponent', component);
    },
    handleDeleteCompoent({ commit }, { id }) {
      commit('deleteComponent', id);
    },
    handleCopyCompoent({ commit, state }, { id }) {
      let component = {};
      state.editorLayout.forEach((v) => {
        if (v.id === id) {
          component = JSON.parse(JSON.stringify(v));
        }
        // v.active = false;
      });
      component = {
        ...component,
        active: true,
        name: `${component.name}(复制)`,
        x: 10,
        y: 10,
        id: uuid(),
      };
      commit('addComponent', component);
    },
    handleTopCompoent({ commit, state }, { id }) {
      const layout = state.editorLayout;
      const index = layout.findIndex((item) => item.id === id);
      const cur = layout.splice(index, 1);
      layout.push(cur[0]);
      commit('set_editorLayout', {
        editorLayout: layout,
      });
    },
    handleBottomCompoent({ commit, state }, { id }) {
      const layout = state.editorLayout;
      const index = layout.findIndex((item) => item.id === id);
      const cur = layout.splice(index, 1);
      layout.unshift(cur[0]);
      commit('set_editorLayout', {
        editorLayout: layout,
      });
    },
  },
  getters: {
    editorLayout: (state) => state.editorLayout,
    selectCompont: (state) => state.editorLayout.find((v) => v.active === true),
  },
});
