<template>
  <div>
    <canvas id="chart-data"></canvas>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },

  mounted() {
    const ranking = this.chartData.map((d) => d.ranking).reverse();
    const dates = this.chartData.map((d) => d.sysDate).reverse();

    this.renerChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: ranking,
          },
        ],
      },
      this.options
    );
  },
};
</script>
