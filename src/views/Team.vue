<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="var(--bootcamp-color)"
      fill-opacity="1"
      d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    ></path>
  </svg>
  <header class="team">
    <h2>Wer hat's gebaut und warum?</h2>
  </header>
  <p>
    Das ROTI Tool (ROTI = Return On Time Invested) ist das Abschlussprojekt
    unserer ersten Abschlussklasse zum:r Webentwickler:in von Coding Bootcamps
    Europe. Um ihr Wissen und Können am Ende des Bootcamps unter Beweis zu
    stellen, programmierten die Teilnehmer:innen das Tool unter Verwendung der
    Frameworks HTML, CSS, JavaScript, VueJS und NodeJS.
  </p>
  <p>
    Wenn du auch lernen möchtest, wie ein solches Tool programmiert wird und
    welches Wissen für die Realisierung eines solchen Projekts notwendig ist,
    dann komm ins Bootcamp. Klick einfach
    <a href="https://www.coding-bootcamps.eu/">hier</a> und vereinbare ein
    kostenloses Beratungsgespräch mit uns!
  </p>
  <ul class="list">
    <TeamMember v-for="member in members" :key="member.name" v-bind="member" />
  </ul>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="var(--bootcamp-color)"
      fill-opacity="1"
      d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
</template>

<script>
import TeamMember from "../components/TeamMember.vue";
import members from "../components/TeamMember.js";

export default {
  name: "Team",
  components: {
    TeamMember,
  },
  created() {
    this.members = [...members];
  },
};
</script>
<style>
@media screen and (min-width: 915px) {
  p {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}
</style>
