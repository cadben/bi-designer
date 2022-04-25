import axios from 'axios';
import Vue from 'vue';
import ElementUI from 'element-ui';
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import {
  BarChart,
} from 'echarts/charts';
import {
  CanvasRenderer,
} from 'echarts/renderers';
import {
  GridComponent,
  TooltipComponent,
} from 'echarts/components';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
]);

Vue.component('v-chart', ECharts);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
