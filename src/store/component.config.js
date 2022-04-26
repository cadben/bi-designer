import {
  TEXT_DATA,
  IMAGE_DATA,
  BAR_CHART_DATA,
  TABLE_DATA,
} from './component.data';
import {
  IMAGE_STYLE,
  TEXT_STYLE,
  BAR_CHART_STYLE,
  TABLE_STYLE,
} from './component.style';

export const TEXT = {
  name: '',
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  bgcolor: '',
  active: false,
  id: Math.random(),
  data: {
    type: 'text',
    componentStyle: TEXT_STYLE,
    componentData: TEXT_DATA,
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
