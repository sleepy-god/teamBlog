<template>
  <div id="statistics">
    <div class="statistic-title">
      <i class="el-icon-s-marketing"></i>
      <span>网站资讯</span>
    </div>
    <div id="person-count">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/tooltip'
  import {getVisit} from "@/network/app";

  export default {
    name: "Statistics",
    data() {
      return {
        date: ['6-8', '6-9', '6-10', '6-11', '6-12'],
        count: [22, 23, 20, 2, 29]
      }
    },
    watch: {
      date(val) {
        this.drawLine()
      },
      count(val) {
        this.drawLine()
      }
    },
    mounted() {
      this.getVisit()
    },
    methods: {
      getVisit() {
        getVisit().then(res => {
          this.date = res.data.date;
          this.count = res.data.count;
          this.drawLine()
        })
      },
      drawLine() {
        this.personChartLine = echarts.init(document.getElementById('person-count'));
        let personOption = {
          tooltip: {              //设置tip提示
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.date,
            name: '日期',
            nameTextStyle: {        //坐标轴名称的文字样式
              color: '#FA6F53',
              fontSize: 12,
              padding: [0, 0, 0, 20]
            },
            axisLine: {             //坐标轴轴线相关设置。
              lineStyle: {
                color: '#FA6F53',
              }
            }
          },
          yAxis: {
            name: '访问人数',
            nameTextStyle: {
              color: '#FA6F53',
              fontSize: 12,
              padding: [10, 0, 10, 20]
            },
            axisLine: {
              lineStyle: {
                color: '#FA6F53',
              }
            },
            type: 'value'
          },
          series: [
            {
              name: '访问人数',
              data:  this.count,
              nameStyle: {
                color: '#000000'
              },
              type: 'line',               // 类型为折线图
              lineStyle: {                // 线条样式 => 必须使用normal属性
                normal: {
                  color: '#8AE09F',
                }
              }
            }
          ]
        }
        this.personChartLine.setOption(personOption);
        // window.addEventListener('resize',function(){
        //   this.personChartLine.resize();
        // });
      }
    }
  }
</script>

<style scoped>
  #statistics {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #statistics .statistic-title {
    position: absolute;
    top: 10%;
    left: 10%;
  }

  #person-count {
    height: 60%;
    width: 90%;
    position: absolute;
    top: 15%;
    left: 5%;
    margin: 5px;
  }
</style>