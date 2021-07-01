<template>
  <DesignTop />

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
  <DesignBottom />
</template>

<script>
import TeamMember from "../components/TeamMember.vue";
import members from "../components/TeamMember.js";
import DesignTop from "@/components/DesignTop.vue";
import DesignBottom from "@/components/DesignBottom.vue";

export default {
  name: "Team",
  components: {
    TeamMember,
    DesignTop,
    DesignBottom,
  },
  created() {
    this.members = [...members];
  },
};
</script>
<style>
p {
  margin: 1.5rem;
}
</style>
