<template>
  <header class="team">
    <h2>Statistik</h2>
  </header>
  <button @click="onClick">click</button>
  <ul class="list">
    <roti-list v-for="roti in rotis" :key="roti.id" v-bind="roti" />
  </ul>
</template>

<script>
import RotiList from "../components/RotiList.vue";
import getRotis from "../api/database";

export default {
  name: "RotiTable",
  components: {
    RotiList,
  },
  methods: {
    onClick() {
      getRotis.getRotis();
    },
  },
  data() {
    return {
      rotis: [],
      trainer: "",
    };
  },
  /*created() {
    this.rotis = [...getRotis];
    console.log(this.rotis);
  },*/
};
</script>
<style>
.list {
  all: unset;
}
</style>
