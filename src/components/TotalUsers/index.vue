<template>
  <div>
    <CommonCard title="累计用户数" value="1081,014">
      <template>
        <v-chart :options="getOptions()"></v-chart>
        <div
          id="total-users-chart"
          v-show="false"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template slot="footer">
        <div class="total-users-footer">
          <span>日同比</span>
          <span>5.14%</span>
          <span class="increase"></span>
          <span class="month">月同比</span>
          <span>5.14%</span>
          <span class="decrease"></span>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      return {
        series: [
          {
            type: 'bar',
            data: [200],
            stack: '总量',
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '总量',
            data: [250],
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            data: [200],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0)

              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                children: [
                  {
                    type: 'path',
                    position: endPoint,
                    shape: {
                      d:
                        'M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    position: endPoint,
                    shape: {
                      d: 'M27.273 753.613l485.222-484.233 484.233 485.222z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ],
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  },
  mounted() {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      series: [
        {
          type: 'bar',
          data: [200],
          stack: '总量',
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          stack: '总量',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)

            const endPoint = api.coord([value, 0])

            return {
              type: 'group',
              children: [
                {
                  type: 'path',
                  position: endPoint,
                  shape: {
                    d:
                      'M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  position: endPoint,
                  shape: {
                    d: 'M27.273 753.613l485.222-484.233 484.233 485.222z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
        }
      ],
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
