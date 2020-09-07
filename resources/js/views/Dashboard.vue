<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Graph</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <apexchart type="bar" height="300" :options="first.chartOptions" :series="first.series"></apexchart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Graph</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <apexchart type="line" height="300" :options="first.chartOptions" :series="first.series"></apexchart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Graph</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <apexchart type="donut" height="300" :options="pie.chartOptions" :series="pie.series"></apexchart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Graph</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <apexchart type="pie" height="300" :options="pie.chartOptions" :series="pie.series"></apexchart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// https://madewithvuejs.com/vue-apexcharts
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      first: {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      },

      pie: {
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        }
      },
    }
  },
};
</script>