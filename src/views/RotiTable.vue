<template>
  <header>
    <h2>Statistik</h2>
  </header>
  <div>
    Filter nach Trainer:in:
    <input type="text" placeholder="Trainer" v-model="inputValueTrainer" />
  </div>
  <div>
    Filter nach Thema:
    <input type="text" placeholder="Thema" v-model="inputValueThema" />
  </div>
  <div>
    Filter nach Datum:
    <input type="text" placeholder="Datum" v-model="inputValueDatum" />
  </div>
  <p></p>
  Ergebnisse: {{ filteredRotis.length }}

  <div v-if="filteredRotis.length > 0">
    Roti Verteilung in Prozent:
    <p v-if="rotisWith1PointPercent > 0">1: {{ rotisWith1PointPercent }}%</p>
    <p v-if="rotisWith2PointsPercent > 0">2: {{ rotisWith2PointsPercent }}%</p>
    <p v-if="rotisWith3PointsPercent > 0">3: {{ rotisWith3PointsPercent }}%</p>
    <p v-if="rotisWith4PointsPercent > 0">4: {{ rotisWith4PointsPercent }}%</p>
    <p v-if="rotisWith5PointsPercent > 0">5: {{ rotisWith5PointsPercent }}%</p>
  </div>
  <table class="list">
    <thead>
      <tr v-if="filteredRotis.length > 0">
        <th>Thema</th>
        <th>Trainer:in</th>
        <th>TeachingAssistent:in</th>
        <th>ROTI</th>
        <th v-if="teacher === true">ROTI Kommentar</th>
        <th>Datum (ROTI abgegeben)</th>
      </tr>
    </thead>
    <tbody v-if="teacher === true">
      <roti-list-teacher
        v-for="roti in filteredRotis"
        :key="roti.id"
        v-bind="roti"
      />
    </tbody>

    <tbody v-if="teacher === false">
      <roti-list-student
        v-for="roti in filteredRotis"
        :key="roti.id"
        v-bind="roti"
      />
    </tbody>
  </table>
</template>

<script>
import RotiListTeacher from "../components/RotiListTeacher.vue";
import RotiListStudent from "../components/RotiListStudent.vue";
import dataBase from "../api/database";
import rotiHelper from "../components/rotiTableHelper.js";

export default {
  name: "RotiTable",
  components: {
    RotiListStudent,
    RotiListTeacher,
  },

  data() {
    return {
      rotis: [],
      inputValueTrainer: "",
      inputValueThema: "",
      inputValueDatum: "",
      teacher: false,
    };
  },
  computed: {
    filteredRotis() {
      let resultRotis = rotiHelper.filterByTrainer(
        this.rotis,
        this.inputValueTrainer
      );
      resultRotis = rotiHelper.filterByTopic(resultRotis, this.inputValueThema);
      resultRotis = rotiHelper.filterByDatum(resultRotis, this.inputValueDatum);
      return resultRotis;
    },

    rotisWith1PointPercent() {
      let resultValue = this.filteredRotis.filter((roti) =>
        roti.ranking.includes("1")
      );
      return (100 / this.filteredRotis.length) * resultValue.length;
    },
    rotisWith2PointsPercent() {
      let resultValue = this.filteredRotis.filter((roti) =>
        roti.ranking.includes("2")
      );
      return (100 / this.filteredRotis.length) * resultValue.length;
    },

    rotisWith3PointsPercent() {
      let resultValue = this.filteredRotis.filter((roti) =>
        roti.ranking.includes("3")
      );
      return (100 / this.filteredRotis.length) * resultValue.length;
    },
    rotisWith4PointsPercent() {
      let resultValue = this.filteredRotis.filter((roti) =>
        roti.ranking.includes("4")
      );
      return (100 / this.filteredRotis.length) * resultValue.length;
    },
    rotisWith5PointsPercent() {
      let resultValue = this.filteredRotis.filter((roti) =>
        roti.ranking.includes("5")
      );
      return (100 / this.filteredRotis.length) * resultValue.length;
    },
  },

  created() {
    dataBase
      .getRotis()
      .then((response) => response.json())
      .then((rotis) =>
        rotis.sort(
          (rotiLeft, rotiRight) =>
            (rotiLeft.sysDate < rotiRight.sysDate) -
            (rotiLeft.sysDate > rotiRight.sysDate)
        )
      )
      .then((rotis) => {
        rotis.forEach((roti) => {
          roti.sysDate = new Date(roti.sysDate);
        });
        return rotis;
      })
      .then((rotis) => (this.rotis = rotis));
  },
};
</script>
<style></style>
