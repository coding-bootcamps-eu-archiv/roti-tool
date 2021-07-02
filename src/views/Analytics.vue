<template>
  <DesignTop />
  <div id="app">
    <Charts />
  </div>
  <DesignBottom />
</template>

<script>
import Charts from "@/components/Charts.vue";
import DesignTop from "@/components/DesignTop.vue";
import DesignBottom from "@/components/DesignBottom.vue";

export default {
  name: "App",
  components: {
    Charts,
    DesignTop,
    DesignBottom,
  },
};
</script>

<style></style>
