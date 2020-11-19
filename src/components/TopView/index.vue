<template>
  <div class="topView">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales/index'
import TodayUsers from '../TodayUsers'
import TotalUsers from '../TotalUsers'
import TotalOrders from '../TotalOrder'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TodayUsers,
    TotalUsers,
    TotalOrders
  }
}
</script>

<style lang="scss" scoped>
.topView {
}
</style>