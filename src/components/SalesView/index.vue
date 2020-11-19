<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template slot="header">
        <div class="menu-wrapper">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              unlink-panels
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <div>
            <v-chart :options="chartOptions" />
            <div class="sales-view-list">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <!-- <div class="list-item-no" :class="item.no <= 3 ? 'top-no' : ''">
                  {{ item.no }}
                </div> -->
                <div></div>
                <div :class="['list-item-no', item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              let start = new Date()
              let end = new Date()
              start = start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              let start = new Date()
              let end = new Date()
              start = start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              let start = new Date()
              let end = new Date()
              start = start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOptions: {},
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '肯德基',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦肯基',
          money: '323,234'
        }
      ]
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
      console.log('activeIndex', this.activeIndex)
    }
  }
}
</script>

<style lang="scss" >
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
    .sales-view-chart-wrapper {
      display: flex;
      height: 270px;
      .echarts {
        flex: 0, 0, 70%;
        width: 70%;
        height: 100%;
      }
      .sales-view-list {
        flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>