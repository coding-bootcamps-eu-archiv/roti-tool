<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="var(--bootcamp-color)"
      fill-opacity="1"
      d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    ></path>
  </svg>
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
    src="/static/ROTIexplanation.png"
    alt="ROTI explanation"
    style="width: 30%; height: auto"
  />
  <p class="source">
    (Quelle:
    http://www.agile-ux.com/wp-content/uploads/2010/11/roti-grosjean-agileux.png)
  </p>
  <ul>
    <li>
      5: Exzellent/Hoher Wert – Der Nutzen der Veranstaltung ist viel mehr Wert
      als die dafür investierte Zeit 🤩
    </li>
    <br />
    <li>
      4: Überdurchschnittlich/Guter Wert – Der Gewinn ist höher als die
      investierte Zeit 😃
    </li>
    <br />
    <li>
      3: Durchschnittlich/Normaler Wert – Nutzen und Zeitaufwand halten sich die
      Waage, die Zeit wurde nicht verschwendet 🤓
    </li>
    <br />
    <li>
      2: Unterdurchschnittlich/Geringer Wert – Der Nutzen rechtfertigt die
      investierte Zeit nicht zu 100%, es wurde Zeit verschenkt 🤷‍♂️
    </li>
    <br />
    <li>
      1: Nutzlos/Kein Wert – Die Veranstaltung hatte keinerlei Nutzen, sämtliche
      investierte Zeit wurde verschenkt 🙁
    </li>
  </ul>
  <button class="rotiBtn" tabindex="100" @click="$router.push('/new')">
    Klick fürs ROTI ⭐️
  </button>
  <br />
  <hr />
  <article class="instruction-container">
    <h2>Anleitung</h2>
    <p>
      Die Bedienung des ROTI Tools ist super leicht und erklärt sich von allein.
    </p>
    <div>
      <InstructionCard
        headline="Schritt 1"
        description="Im ersten Schritt wählst du das Thema der von dir bewerteten Sitzung, die Trainer:in und ggf. die Teaching Assistants aus."
        picture_src="/static/Dropdown.png"
        picture_alt="Dropdown"
      />
      <hr />
      <InstructionCard
        headline="Schritt 2"
        description="Hier kannst du deine Punktzahl von 1 bis 5 eingeben."
        picture_src="/static/Ranking.png"
        picture_alt="Ranking"
      />
      <hr />
      <InstructionCard
        headline="Schritt 3"
        description="Jetzt hast du die Möglichkeit, einen Kommentar zu hinterlassen, in dem du deine gewählte Punktzahl begründest und Feedback hinterlässt, was dir für die nächst höhere Punktzahl gefehlt hat."
        picture_src="/static/Comment.png"
        picture_alt="Comment"
      />
    </div>
  </article>
  <br />
  <button class="rotiBtn" tabindex="100" @click="$router.push('/new')">
    Klick fürs ROTI ⭐️
  </button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="var(--bootcamp-color)"
      fill-opacity="1"
      d="M0,192L80,160C160,128,320,64,480,74.7C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
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
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}

body {
  margin: 0;
}

.rotiBtn {
  padding: 1rem;
  background-color: var(--bootcamp-color);
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
}

.instruction-container {
  margin-top: 5rem;
}

hr {
  border: 0;

  height: 2px;
  background-color: var(--bootcamp-color);
}

li {
  list-style: none;
}

.source {
  font-size: 0.8rem;
}

button {
  border: none;
}
</style>
