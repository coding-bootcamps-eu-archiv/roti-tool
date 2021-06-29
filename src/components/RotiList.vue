<template>
  <article class="member">
    <div class="textContent">
      <li class="name">{{ name }}</li>
    </div>
  </article>
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
      type: Number,
    },
    rotiText: {
      type: String,
    },
    sysDate: {
      type: Date,
    },
  },
};
</script>
