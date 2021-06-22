<template>
  <li>{{ name }}</li>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    foto: {
      type: Image,
    },

    name: {
      type: String,
    },
    bullet1: {
      type: String,
    },
    bullet2: {
      type: String,
    },
    bullet3: {
      type: String,
    },
  },
};
</script>

<style></style>
