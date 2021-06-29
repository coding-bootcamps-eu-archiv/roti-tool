<template>
  <header>
    <h2>Statistik</h2>
  </header>
  <div>
    Filter nach Trainer:
    <input type="text" placeholder="Trainer" v-model="inputValueTrainer" />
    Ergebnisse: {{ filteredRotis.length }}
  </div>
  <div>
    Filter nach Thema:
    <input type="text" placeholder="Thema" v-model="inputValueThema" />
    Ergebnisse: {{ filteredRotis.length }}
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
