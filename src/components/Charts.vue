<template>
  <div class="myChart">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import dataBase from "@/api/database.js";
export default {
  name: "Chart",
  data() {
    return {
      sysDateArr: [],
      dataArr: [],
      teacherArr: [],
      rankingArr: [],
      options: null,
    };
  },
  created() {
    dataBase
      .getRotis()
      .then((response) => response.json())
      .then((rotis) => {
        rotis.forEach((roti) => {
          roti.sysDate = new Date(roti.sysDate);
          this.options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          roti.sysDate = roti.sysDate.toLocaleDateString("de-DE");
        });
        return rotis;
      })
      .then((rotis) => (this.dataArr = rotis))
      .then(() => {
        this.dataArr.forEach((element) => {
          this.sysDateArr.push(element.sysDate);
          this.rankingArr.push(element.ranking);
          this.teacherArr.push(element.trainer);
        });
      })
      .then(() => {
        const ctx = document.getElementById("myChart").getContext("2d");
        // eslint-disable-next-line no-unused-vars
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: this.sysDateArr,

            datasets: [
              {
                label: "Ranking",
                data: this.rankingArr,
                fill: true,
                borderColor: "rgba(106,28,195)",
                backgroundColor: "rgba(106,28,195, 0.6)",
                borderWidth: 2,
              },
            ],
          },
          options: {},
        });
      });
  },
};
</script>

<style>
.myChart {
  width: 500px;
  height: 300px;
  margin: 0 auto;
}
</style>
