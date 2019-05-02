import echarts from 'echarts';
import { primary } from '../assets/css/main.scss';

const colorPalette = [
  '#C1232B', '#27727B', '#FCCE10', '#E87C25', '#B5C334',
  '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
  '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
];

const theme = {
  color: colorPalette,

  visualMap: {
    itemWidth: 15,
    color: ['#5ab1ef', '#e0ffff']
  },

  toolbox: { iconStyle: { normal: { borderColor: colorPalette[0] } } },

  tooltip: {
    backgroundColor: 'rgb(249,249,249)',
    textStyle: { color: 'black' },
    borderWidth: 1,
    borderColor: '#CCCCCC',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: 'black',
        type: 'dashed',
        opacity: 1
      }
    }
  },

  dataZoom: {
    dataBackgroundColor: '#efefff',
    fillerColor: 'rgba(182,162,222,.2)',
    handleColor: primary
  },

  grid: { borderColor: '#eee' },

  categoryAxis: {
    axisLine: { lineStyle: { color: 'black' } },
    splitArea: {
      show: true,
      areaStyle: { color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)'] }
    }
  },

  valueAxis: {
    axisLine: { lineStyle: { color: 'black' } },
    splitArea: {
      show: true,
      areaStyle: { color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)'] }
    },
    splitLine: { lineStyle: { color: ['#eee'] } }
  },


  timeline: {
    lineStyle: { color: primary },
    symbol: 'none'
  },

  line: {
    smooth: true,
    symbol: 'none'
  },

  scatter: {
    symbol: 'circle',
    symbolSize: 4
  },

  graph: { color: colorPalette }
};
echarts.registerTheme('shine', theme);
