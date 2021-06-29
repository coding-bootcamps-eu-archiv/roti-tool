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
    <P v-if="rotisWith1PointPercent != 0">1: {{ rotisWith1PointPercent }}%</P>
    <P v-if="rotisWith2PointsPercent != 0">2: {{ rotisWith2PointsPercent }}%</P>
    <P v-if="rotisWith3PointsPercent != 0">3: {{ rotisWith3PointsPercent }}%</P>
    <P v-if="rotisWith4PointsPercent != 0">4: {{ rotisWith4PointsPercent }}%</P>
    <P v-if="rotisWith5PointsPercent != 0">5: {{ rotisWith5PointsPercent }}%</P>
  </div>
  <table class="list">
    <thead>
      <tr>
        <th>thema</th>
        <th>trainer</th>
        <th>teachingAssistent</th>
        <th>Roti Note</th>
        <th v-if="teacher === true">Roti Kommentar</th>
        <th>Datum (Roti abgegeben)</th>
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
      teacher: false,
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
