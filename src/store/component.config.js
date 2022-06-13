import {
  TEXT_DATA,
  IMAGE_DATA,
  BAR_CHART_DATA,
  TABLE_DATA,
  LINE_DATA,
  PIE_CHART_DATA,
  AREA_CHART_DATA,
  FUNNEL_CHART_DATA,
  RECT_DATA,
  RADAR_CHART_DATA,
  SANKEY_CHART_DATA,
  CAROUSEL_HORIZON_DATA,
} from './component.data';
import {
  IMAGE_STYLE,
  TEXT_STYLE,
  BAR_CHART_STYLE,
  TABLE_STYLE,
  LINE_CHART_STYLE,
  PIE_CHART_STYLE,
  AREA_CHART_STYLE,
  FUNNEL_CHART_STYLE,
  RECT_STYLE,
  RADAR_CHART_STYLE,
  SANKEY_CHART_STYLE,
  CAROUSEL_HORIZON_STYLE,
} from './component.style';

export const TEXT = {
  name: '',
  x: 0,
  y: 0,
  width: 200,
  height: 100,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'text',
    componentStyle: TEXT_STYLE,
    componentData: TEXT_DATA,
  },
};

export const RECT = {
  name: '',
  x: 0,
  y: 0,
  width: 200,
  height: 100,
  bgcolor: '#000',
  active: false,
  id: Math.random(),
  data: {
    type: 'rect',
    componentStyle: RECT_STYLE,
    componentData: RECT_DATA,
  },
};

export const IMAGE = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'image',
    componentStyle: IMAGE_STYLE,
    componentData: IMAGE_DATA,
  },
};

export const BAR = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'bar',
    componentStyle: BAR_CHART_STYLE,
    componentData: BAR_CHART_DATA,
  },
};

export const TABLE = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'table',
    componentStyle: TABLE_STYLE,
    componentData: TABLE_DATA,
  },
};

export const LINE = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'line',
    componentStyle: LINE_CHART_STYLE,
    componentData: LINE_DATA,
  },
};

export const PIE = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'pie',
    componentStyle: PIE_CHART_STYLE,
    componentData: PIE_CHART_DATA,
  },
};

export const AREA = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'area',
    componentStyle: AREA_CHART_STYLE,
    componentData: AREA_CHART_DATA,
  },
};

export const FUNNEL = {
  name: '',
  x: 0,
  y: 0,
  width: 500,
  height: 600,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'funnel',
    componentStyle: FUNNEL_CHART_STYLE,
    componentData: FUNNEL_CHART_DATA,
  },
};

export const RADAR = {
  name: '',
  x: 0,
  y: 0,
  width: 500,
  height: 600,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'radar',
    componentStyle: RADAR_CHART_STYLE,
    componentData: RADAR_CHART_DATA,
  },
};

export const SANKEY = {
  name: '',
  x: 0,
  y: 0,
  width: 500,
  height: 600,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'sankey',
    componentStyle: SANKEY_CHART_STYLE,
    componentData: SANKEY_CHART_DATA,
  },
};

export const CAROUSEL = {
  name: '',
  x: 0,
  y: 0,
  width: 500,
  height: 600,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'carousel',
    componentStyle: CAROUSEL_HORIZON_STYLE,
    componentData: CAROUSEL_HORIZON_DATA,
  },
};
