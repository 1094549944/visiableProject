<template>
  <v-chart :options="data"></v-chart>
</template>

<script>
export default {
  name: 'Vuecharts',
  data() {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            data: [12, 25, 26, 45, 85]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>