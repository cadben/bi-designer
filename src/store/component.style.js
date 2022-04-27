export const TEXT_STYLE = [
  {
    style_label: '文本',
    style_id: 'text',
    component: 'el-input',
    componentAttr: {
      type: 'textarea',
      rows: 2,
    },
  },
  {
    style_label: '字体大小',
    style_id: 'fontSize',
    component: 'el-input-number',
    componentAttr: {
      size: 'mini',
      controlsPosition: 'right',
      min: 12,
      max: 48,
    },
  },
  {
    style_label: '文本位置',
    style_id: 'textAlign',
    component: 'c-radio-group',
    componentAttr: {
      options: [
        {
          key: 'left',
          label: '左',
        },
        {
          key: 'center',
          label: '中',
        },
        {
          key: 'right',
          label: '右',
        },
      ],
    },
  },
];

export const IMAGE_STYLE = [{
  style_label: '图片URL',
  style_id: 'imgUrl',
  component: 'el-input',
  componentAttr: {
    size: 'mini',
  },
}, {
  style_label: '展示方式',
  style_id: 'showType',
  component: 'c-select-group',
  componentAttr: {
    size: 'mini',
    options: [
      {
        key: 'full',
        label: '平铺',
      },
      {
        key: 'cover',
        label: '拉伸',
      },
    ],
  },
}];

export const BAR_CHART_STYLE = [{
  style_label: '标题',
  style_id: 'title',
  component: 'el-input',
  componentAttr: {
    size: 'mini',
  },
}, {
  style_label: '内容',
  style_id: 'chartJsonData',
  component: 'c-json-editor',
  componentAttr: {
  },
}];

export const TABLE_STYLE = [{
  style_label: '内容',
  style_id: 'tableData',
  component: 'c-json-editor',
  componentAttr: {
  },
}, {
  style_label: '获取数据',
  style_id: 'getDataType',
  component: 'c-select-group',
  componentAttr: {
    size: 'mini',
    options: [
      {
        key: 'static',
        label: '静态数据',
      },
      {
        key: 'get',
        label: 'API(GET)',
      },
    ],
  },
}, {
  style_label: '数据接口',
  style_id: 'tableDataUrl',
  component: 'el-input',
  componentAttr: {
    size: 'mini',
  },
}];

export const LINE_CHART_STYLE = [{
  style_label: '标题',
  style_id: 'title',
  component: 'el-input',
  componentAttr: {
    size: 'mini',
  },
}, {
  style_label: '内容',
  style_id: 'chartJsonData',
  component: 'c-json-editor',
  componentAttr: {
  },
}];
