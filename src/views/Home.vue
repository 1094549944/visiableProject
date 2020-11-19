<template>
  <div>
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
    <Vuecharts />
    <VCharts />
  </div>
</template>

<script>
import TopView from '../components/TopView/index'
import BottomView from '../components/BottomView/index'
import SalesView from '../components/SalesView/index'
import MapView from '../components/MapView/index'
import Vuecharts from '../components/test/Vuecharts'
import VCharts from '../components/test/Vcharts'
export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    SalesView,
    MapView,
    Vuecharts,
    VCharts
  }
}
</script>

<style lang="scss" scoped>
</style>