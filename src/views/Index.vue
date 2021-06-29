<template>
  <h2>Was ist ein ROTI?</h2>
  <p>
    ROTI ist eine Feedback-Methode, bei der Menschen unkompliziert angeben
    können, wie gut ihnen eine Veranstaltung, eine Unterrichtsstunde, ein
    Meeting etc. gefallen hat. Das Ziel des ROTI ist es, zu erfahren, ob die
    investierte Zeit auch einen Nutzen hatte oder eher verschwendet wurde. Dazu
    gibt es Punktzahlen von 1 bis 5, die jeweils unterschiedliche Bedeutungen
    haben:
  </p>
  <img
    src="http://www.agile-ux.com/wp-content/uploads/2010/11/roti-grosjean-agileux.png"
    alt="ROTI explanation"
    width="300"
    height="200"
  />
  <ul>
    <li>
      5: Exzellent/Hoher Wert – Der Nutzen der Veranstaltung ist viel mehr Wert
      als die dafür investierte Zeit 🤩
    </li>
    <br />
    <li>
      4: Überdurchschnittlich/Guter Wert – Der Gewinn ist höher als die
      investierte Zeit
    </li>
    <br />
    <li>
      3: Durchschnittlich/Normaler Wert – Nutzen und Zeitaufwand halten sich die
      Waage, die Zeit wurde nicht verschwendet
    </li>
    <br />
    <li>
      2: Unterdurchschnittlich/Geringer Wert – Der Nutzen rechtfertigt die
      investierte Zeit nicht zu 100%, es wurde Zeit verschenkt
    </li>
    <br />
    <li>
      1: Nutzlos/Kein Wert – Die Veranstaltung hatte keinerlei Nutzen, sämtliche
      investierte Zeit wurde verschenkt 🙁
    </li>
  </ul>
  <button class="rotiBtn" tabindex="100" @click="$router.push('/new')">
    Klick fürs ROTI 🦄
  </button>
  <br />
  <article class="instruction-container">
    <h2>Anleitung</h2>
    <p>
      Die Bedienung des ROTI Tools ist super leicht und erklärt sich von allein.
    </p>
    <div>
      <InstructionCard
        headline="Schritt 1"
        description="Im ersten Schritt wählst du das Thema der von dir bewerteten Sitzung, die Trainer:in und ggf. die Teaching Assistants aus."
        picture_src="https://images.unsplash.com/photo-1534481016308-0fca71578ae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdHJ1Y3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        picture_alt="Hier steht ALT Text für Picture 1"
      />
      <InstructionCard
        headline="Schritt 2"
        description="Hier kannst du deine Punktzahl von 1 bis 5 eingeben."
        picture_src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdHJ1Y3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        picture_alt="Hier steht ALT Text für Picture 2"
      />
      <InstructionCard
        headline="Schritt 3"
        description="Jetzt hast du die Möglichkeit, einen Kommentar zu hinterlassen, in dem du deine gewählte Punktzahl begründest und Feedback hinterlässt, was dir für die nächst höhere Punktzahl gefehlt hat."
        picture_src="https://images.unsplash.com/photo-1589803299004-b9143b44275f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        picture_alt="Hier steht ALT Text für Picture 3"
      />
    </div>
  </article>
  <br />
</template>

<script>
import InstructionCard from "@/components/InstructionCard.vue";
import database from "@/api/database.js";

export default {
  name: "Index",
  components: { InstructionCard },

  data: () => {
    return {
      allRotis: database.getRotis(),
    };
  },
};
</script>

<style>
@media screen and (min-width: 915px) {
  p {
    margin-left: 15rem;
    margin-right: 15rem;
  }
}

.rotiBtn {
  padding: 1rem;
  background-color: #6a1cc3;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
}

.instruction-container {
  margin-top: 5rem;
}
</style>
