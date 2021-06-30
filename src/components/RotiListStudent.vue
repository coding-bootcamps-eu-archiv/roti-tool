<template>
  <tr>
    <td>{{ topic }}</td>
    <td>{{ trainer }}</td>
    <td>{{ teachingAssistent }}</td>
    <td>{{ ranking }}</td>
    <td>{{ dateFormatter(sysDate) }}</td>
  </tr>
</template>

<script>
export default {
  name: "RotiList",
  methods: {
    dateFormatter: (date) => {
      return date.toDateString();
    },
  },
  props: {
    topic: {
      type: String,
    },
    trainer: {
      type: String,
    },
    teachingAssistent: {
      type: String,
    },
    ranking: {
      type: String,
    },
    sysDate: {
      type: Date,
    },
  },
};
</script>
