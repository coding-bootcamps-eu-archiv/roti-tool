<template>
  <div id="app">
    <ChartSet class="app" />
  </div>
</template>

<script>
import ChartSet from "@/components/ChartSet.vue";

export default {
  name: "App",
  components: {
    ChartSet,
  },
};
</script>

<style>
.app {
  height: 500px;
  width: 500px;
  margin-left: 35%;
}
</style>
