<template>
  <div class="member">
    <img class="picture" alt="Bild" :src="foto_url" />
    <div class="textContent">
      <li class="name">{{ name }}</li>
      <li>{{ bullet1 }}</li>
      <li>{{ bullet2 }}</li>
      <li>{{ bullet3 }}</li>
      <li class="twitter">
        <a :href="twitter" target="_blank">
          <img
            class="twitter"
            src="/static/Twitter social icons - circle - blue.png"
            alt="
      Twitter-Logo"
          />
        </a>
      </li>
    </div>
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
    twitter: {
      type: String,
    },
  },
};
</script>

<style>
@media screen and (min-width: 768px) {
  .member {
    margin-top: 10px;
    _border: 1px solid black;
    list-style-type: none;
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    margin-left: 15rem;
    margin-right: 15rem;
  }
}
.member {
  margin-top: 10px;
  _border: 1px solid black;
  display: grid;
  text-align: left;
  _grid-gap: 20px;
  list-style-type: none;
}
.picture {
  height: 200px;
  max-width: 300px;
  border-radius: 30px;
  display: block;
  margin: 10px;
  margin-left: 0px;
}
.textContent {
  _width: 350px;
  text-align: left;
  margin: 15px;
  margin-left: 0px;
}
@media screen and (max-width: 768px) {
  .textContent {
    width: 350px;
  }
}
.twitter {
  height: 20px;
  width: auto;
}

.name {
  font-weight: bold;
}
</style>
