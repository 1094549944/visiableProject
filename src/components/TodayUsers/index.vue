<template>
  <div>
    <CommonCard title="今日交易用户数" value="81,014">
      <template>
        <v-chart :options="getOptions()"></v-chart>
        <div
          id="today-users-chart"
          v-show="false"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template slot="footer">
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      return {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        series: [
          {
            type: 'bar',
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 137, 48, 32],
            barWidth: '60%',
            name: '标注'
          }
        ],
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
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
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 137, 48, 32],
          barWidth: '60%',
          name: '标注'
        }
      ],
      xAxis: {
        type: 'category',
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00'
        ],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
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
</style>