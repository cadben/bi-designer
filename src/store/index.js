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
  },
  getters: {
    editorLayout: (state) => state.editorLayout,
  },
});
