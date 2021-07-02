<template>
  <DesignTop />

  <header class="team">
    <h2 class="h-wer">Wer hat das ROTI Tool gebaut?</h2>
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
  <br />
  <hr />
  <br />
  <h2>Warum wurde das ROTI Tool gebaut?</h2>
  <p>
    Das ROTI-Tool hat einen direkten Nutzen für die Teilnehmer:innen der Class
    #1 und aller zukünftigen Klassen von Coding Bootcamps Europe. Jeden Tag
    machen wir mit den Teilnehmer:innen einen Check-In und Check-Out. Dabei
    fragen wir, wie ihnen der Tag, der Unterricht und die Aufgaben gefallen
    haben und bitten sie beim ROTI um eine Punktevergabe von 1 bis 5. Dadurch
    wollen wir sicherstellen, dass alle zufrieden sind und gleichzeitig die
    Möglichkeit bieten, Kritik zu äußern und Feedback zu geben. Schließlich
    wollen wir wissen, wie es unseren Absolvent:innen geht, was sie beschäftigt
    und wie wir besser werden können.
  </p>
  <p>
    In unserem ersten Camp waren die Check-Ins und Check-Outs ein zentraler
    Punkt des Tagesablaufs und sowohl für die Teilnehmer:innen als auch für die
    Trainer:innen von großer Bedeutung. Die vergebenen Punkte und das mündliche
    Feedback wurden bislang in einer Google-Spreadsheet-Tabelle festgehalten.
    Die Professionalisierung dieser ROTI-Runden bot sich aufgrund der hohen
    Bedeutung für alle Beteiligten als Abschlussprojekt für unsere Class #1 an.
    Mit ihren neuen Programmier-Skills haben sie sich nun in dem selbst
    erschaffenen Tool verewigt.
  </p>
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
  margin-left: 3.5rem;
  margin-right: 3.5rem;
}

.h-wer {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
