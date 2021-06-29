<template>
  <header>
    <h2>Statistik</h2>
  </header>
  <div>
    Filter nach Trainer:
    <input type="text" placeholder="Trainer" v-model="inputValueTrainer" />
  </div>
  <div>
    Filter nach Thema:
    <input type="text" placeholder="Thema" v-model="inputValueThema" />
  </div>
  Ergebnisse: {{ filteredRotis.length }}

  <div>
    Roti Verteilung in Prozent:
    <P>1: {{ rotisWith1PointPercent }}%</P>
    <P>2: {{ rotisWith2PointsPercent }}%</P>
    <P>3: {{ rotisWith3PointsPercent }}%</P>
    <P>4: {{ rotisWith4PointsPercent }}%</P>
    <P>5: {{ rotisWith5PointsPercent }}%</P>
  </div>
  <table class="list">
    <thead>
      <tr>
        <th>thema</th>
        <th>trainer</th>
        <th>teachingAssistent</th>
        <th>Roti Note</th>
        <th>Roti Kommentar</th>
        <th>Datum (Roti abgegeben)</th>
      </tr>
    </thead>
    <tbody>
      <roti-list v-for="roti in filteredRotis" :key="roti.id" v-bind="roti" />
    </tbody>
  </table>
</template>

<script>
import RotiList from "../components/RotiList.vue";
import dataBase from "../api/database";

export default {
  name: "RotiTable",
  components: {
    RotiList,
  },

  data() {
    return {
      rotis: [],
      inputValueTrainer: "",
      inputValueThema: "",
    };
  },
  computed: {
    filteredRotis() {
      return this.rotis.filter(
        (roti) =>
          roti.trainer.includes(this.inputValueTrainer) &&
          roti.thema.includes(this.inputValueThema)
      );
    },
    rotisWith1Point() {
      return this.rotis.filter(
        (roti) =>
          roti.rotiValue.includes("1") &&
          roti.trainer.includes(this.inputValueTrainer) &&
          roti.thema.includes(this.inputValueThema)
      );
    },
    rotisWith1PointPercent() {
      return (100 / this.filteredRotis.length) * this.rotisWith1Point.length;
    },
    rotisWith2Points() {
      return this.rotis.filter(
        (roti) =>
          roti.rotiValue.includes("2") &&
          roti.trainer.includes(this.inputValueTrainer) &&
          roti.thema.includes(this.inputValueThema)
      );
    },
    rotisWith2PointsPercent() {
      return (100 / this.filteredRotis.length) * this.rotisWith2Points.length;
    },
    rotisWith3Points() {
      return this.rotis.filter(
        (roti) =>
          roti.rotiValue.includes("3") &&
          roti.trainer.includes(this.inputValueTrainer) &&
          roti.thema.includes(this.inputValueThema)
      );
    },
    rotisWith3PointsPercent() {
      return (100 / this.filteredRotis.length) * this.rotisWith3Points.length;
    },
    rotisWith4Points() {
      return this.rotis.filter(
        (roti) =>
          roti.rotiValue.includes("4") &&
          roti.trainer.includes(this.inputValueTrainer) &&
          roti.thema.includes(this.inputValueThema)
      );
    },
    rotisWith4PointsPercent() {
      return (100 / this.filteredRotis.length) * this.rotisWith4Points.length;
    },
    rotisWith5Points() {
      return this.rotis.filter(
        (roti) =>
          roti.rotiValue.includes("5") &&
          roti.trainer.includes(this.inputValueTrainer) &&
          roti.thema.includes(this.inputValueThema)
      );
    },
    rotisWith5PointsPercent() {
      return (100 / this.filteredRotis.length) * this.rotisWith5Points.length;
    },
  },

  created() {
    dataBase
      .getRotis()
      .then((response) => response.json())
      .then((rotis) => (this.rotis = rotis));
  },
};
</script>
<style></style>
