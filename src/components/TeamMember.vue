<template>
  <div class="member">
    <img class="picture" alt="Bild" :src="foto_url" />
    <li class="name">{{ name }}</li>
    <li>{{ bullet1 }}</li>
    <li>{{ bullet2 }}</li>
    <li>{{ bullet3 }}</li>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    foto_url: {
      type: String,
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

<style>
@media screen and (min-width: 768px) {
  .member {
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    margin-left: 15rem;
    margin-right: 15rem;
  }
}
.member {
  display: grid;
  text-align: center;
  grid-gap: 20px;
}
.picture {
  height: 200px;
  width: 300px;
  border-radius: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.name {
  font-weight: bold;
}
</style>
