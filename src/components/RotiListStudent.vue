<template>
  <tr>
    <td>{{ thema }}</td>
    <td>{{ trainer }}</td>
    <td>{{ teachingAssistent }}</td>
    <td>{{ rotiValue }}</td>
    <td>{{ sysDate }}</td>
  </tr>
</template>

<script>
export default {
  name: "RotiList",
  props: {
    thema: {
      type: String,
    },
    trainer: {
      type: String,
    },
    teachingAssistent: {
      type: String,
    },
    rotiValue: {
      type: String,
    },
    sysDate: {
      type: String,
    },
  },
};
</script>
