<template>
  <div>
    <canvas id="chart-data"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import chartData from "./chartData.js";

export default {
  name: "Chart",

  data() {
    return {
      chartData,
      hello: [],
      arr1: [],
      arr3: [],
    };
  },

  mounted() {
    console.log(this.hello);
    const ctx = document.getElementById("chart-data");
    new Chart(ctx, this.chartData);
  },
};
</script>
