<template>
  <canvas id="myChart" width="400" height="200"></canvas>
</template>

<script>
import Chart from "chart.js";
import dataBase from "@/api/database.js";
export default {
  name: "Chart",
  data() {
    return {
      topicArr: [],
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
          this.topicArr.push(element.sysDate);
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
            labels: this.topicArr,

            datasets: [
              {
                label: "Ranking",
                data: this.rankingArr,
                fill: false,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderWidth: 1,
              },
            ],
          },
          options: {},
        });
      });
  },
};
</script>
