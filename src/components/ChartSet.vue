<template>
  <div>
    <canvas id="chart-data"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import chartData from "./chartData.js";
import dataBase from "@/api/database.js";

export default {
  name: "Chart",

  data() {
    return {
      chartData,
      arr2: [],
      arr1: [],
      arr3: [],
    };
  },

  created() {
    dataBase
      .getRotis()
      .then((response) => response.json())
      .then((rotis) => {
        rotis.forEach((roti) => {
          roti.sysDate = new Date(roti.sysDate);
        });
        return rotis;
      })
      .then((rotis) => (this.arr1 = rotis))
      .then(() => {
        this.arr1.forEach((element) => {
          this.arr2.push(element.topic);
          this.arr3.push(element.sysDate);
          console.log(element.sysDate);
        });
      });
  },

  mounted() {
    const ctx = document.getElementById("chart-data");
    new Chart(ctx, this.chartData);
  },
};
</script>
