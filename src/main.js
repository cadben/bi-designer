import axios from 'axios';
import Vue from 'vue';
import ElementUI from 'element-ui';
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import {
  BarChart,
  LineChart,
  PieChart,
  FunnelChart,
} from 'echarts/charts';
import {
  CanvasRenderer,
} from 'echarts/renderers';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from 'echarts/components';
import IconFont from './components/IconFont.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.less';

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  LineChart,
  TitleComponent,
  PieChart,
  LegendComponent,
  FunnelChart,
]);

Vue.component('icon-font', IconFont);
Vue.component('v-chart', ECharts);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
