<template>
  <article class="member">
    <img class="picture" alt="Bild" :src="foto_url" />
    <div class="textContent">
      <li class="name">{{ name }}</li>
      <li data-test="bullet">{{ bullet1 }}</li>
      <li data-test="bullet">{{ bullet2 }}</li>
      <li data-test="bullet">{{ bullet3 }}</li>
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
  </article>
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
    margin-top: 1.5rem;

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
  margin: 1.5rem;

  display: grid;
  text-align: left;

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
  text-align: left;
  margin: 1.5rem;
}
@media screen and (max-width: 768px) {
  .textContent {
    margin: 1.5rem;
    margin-left: 0;
  }
}
.twitter {
  height: 20px;
  width: auto;
  margin-top: 0.3rem;
}

.name {
  font-weight: bold;
}
</style>
