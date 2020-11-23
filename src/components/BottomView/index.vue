<template>
  <div>
    <div class="bottom-view">
      <div class="view">
        <el-card shadow="hover">
          <template slot="header">
            <div class="title-wrapper">关键词搜索</div>
          </template>
          <template>
            <div class="chart-wrapper">
              <div class="chart-inner">
                <div class="chart">
                  <div class="chart-title">搜索用户数</div>
                  <div class="chart-data">93,634</div>
                  <v-chart :options="searchUserOption" />
                </div>
                <div class="chart">
                  <div class="chart-title">搜索量</div>
                  <div class="chart-data">93,634</div>
                  <v-chart :options="searchNumberOption" />
                </div>
              </div>
              <div class="table-wrapper">
                <el-table :data="tableData">
                  <el-table-column prop="rank" label="排名" />
                  <el-table-column prop="keyword" label="关键词" />
                  <el-table-column prop="count" label="总搜索量" />
                  <el-table-column prop="user" label="搜索用户数" />
                  <el-table-column prop="range" label="排名" />
                </el-table>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000"
                  @current-change="onPageChange"
                >
                </el-pagination>
              </div>
            </div>
          </template>
        </el-card>
      </div>
      <div class="view">
        <el-card shadow="hover">
          <template slot="header">
            <div class="title-wrapper">
              <div class="title">分类销售排行</div>
              <div class="radio-wrapper">
                <el-radio-group v-model="radioSelect" size="small">
                  <el-radio-button label="品类"></el-radio-button>
                  <el-radio-button label="商品"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
          </template>
          <template>
            <div class="chart-wrapper">
              <v-chart :options="categoryOptions"></v-chart>
            </div>
          </template>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data() {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          max: 300,
          min: 0
        },
        series: [
          {
            type: 'line',
            areaStyle: {
              color: 'rgba(95,187,255,0.5)'
            },
            lineStyle: {
              color: 'rgb(95,187,255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true,
            data: [100, 150, 250, 50, 100, 250]
          }
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      categoryOptions: {},
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: '北京',
          count: 100,
          user: 99,
          range: '90%'
        }
      ],
      radioSelect: '品类'
    }
  },
  mounted() {
    this.renderPieChart()
  },
  methods: {
    onPageChange(page) {
      console.log(page)
    },
    renderPieChart() {
      const mockData = [
        {
          legendname: '粉面粥店',
          name: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          }
        },
        {
          legendname: '简餐便当',
          name: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#8d7fec'
          }
        },
        {
          legendname: '汉堡披萨',
          name: '汉堡披萨',
          value: 92,
          percent: '22.15%',
          itemStyle: {
            color: '#5085f2'
          }
        }
      ]
      this.categoryOptions = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 24,
              color: '#333'
            }
          }
        ],
        series: [
          {
            type: 'pie',
            data: mockData,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: function (params) {
                  console.log(params)
                  return params.data.legendname
                }
              }
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 5,
                length2: 2,
                smooth: true
              }
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff'
            }
          }
        ],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: ''
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            console.log(params)
            const str = ` ${params.name}<br/>${params.marker}${params.data.legendname}<br/>${params.marker}${params.data.value}<br/>${params.marker}${params.data.percent}`
            return str
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
    }
    .table-wrapper {
      flex: 1;
      margin-top: 20px;
      padding: 0 20px 20px;
      .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
      }
    }
  }
}
</style>