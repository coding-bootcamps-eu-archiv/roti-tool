<template>
  <div class="container">
    <img class="instructionImage" :src="picture_src" />
    <section>
      <h3>{{ headline }}</h3>
      <p>{{ description }}</p>
    </section>
    <div class="pic_sub">{{ pic_desc }}</div>
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

<style scoped>
@media screen and (min-width: 768px) {
  .container {
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    margin-left: 15rem;
    margin-right: 15rem;
  }
}

.container {
  display: grid;
  text-align: center;

  grid-gap: 20px;
}

.instructionImage {
  height: 200px;
  width: 300px;
  border-radius: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
