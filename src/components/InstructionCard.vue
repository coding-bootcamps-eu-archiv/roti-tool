<template>
  <div>
    <h3>{{ headline }}</h3>
    <img :src="picture_src" />
    <div class="pic_sub">{{ pic_desc }}</div>
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: "InstructionCard",
  props: {
    headline: String,
    description: String,
    picture_src: String,
    pic_desc: String,
  },
};
</script>
