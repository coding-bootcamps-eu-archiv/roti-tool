<template>
  <h2>Neuer ROTI Eintrag</h2>

  <form class="input-roti-form">
    <select
      name="field"
      v-model="value"
      id="topics"
      class="dropdown-items"
      required
    >
      <option value=" ">--Thema--</option>
      <option v-for="topics in topics" :key="topics.id" value="topic">
        {{ topics.description }}
      </option>
    </select>

    <select name="trainer" id="trainer" class="dropdown-items">
      <option value=" ">--Trainer--</option>
      <option value="trainer" v-for="trainer in trainer" :key="trainer.id">
        {{ trainer.name }}
      </option>
    </select>

    <select
      name="teachingAssistent"
      id="teachingAssistent"
      class="dropdown-items"
    >
      <option value=" ">--Teaching Assistent--</option>
      <option
        value="teachingAssistent"
        v-for="teachingAssistent in teachingAssistent"
        :key="teachingAssistent.id"
      >
        {{ teachingAssistent.name }}
      </option>
    </select>

    <input
      placeholder="date"
      class="textbox-n dropdown-items"
      type="date"
      id="date"
    />
    <div class="full-width">
      <p>Gib deine Ranking ab</p>
      <span class="radio-btn">
        <input type="radio" name="rotiValue" id="1" value="1" />
        <label for="1">1</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="rotiValue" id="2" value="2" />
        <label for="2">2</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="rotiValue" id="3" value="3" />
        <label for="3">3</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="rotiValue" id="4" value="4" />
        <label for="4">4</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="rotiValue" id="5" value="5" />
        <label for="5">5</label>
      </span>
    </div>
    <textarea
      class="full-width"
      name="comment"
      id="comment"
      cols="30"
      rows="10"
      placeholder="Gib dein Kommentar ab (1000 Zeichen)"
      maxlength="1000"
    ></textarea>
    <button class="full-width">Absenden</button>
  </form>
</template>

<script>
import { useField } from "vee-validate";
import {
  topics,
  trainer,
  teachingAssistent,
} from "@/components/dropdownContent.js";

export default {
  name: "NewRoti",
  components: {},
  data: () => {
    return {
      topics,
      trainer,
      teachingAssistent,
    };
  },
  setup() {
    // Validator function
    const isRequired = (value) => (value ? true : "This field is required");
    const { value, errorMessage } = useField("field", isRequired);

    return {
      value,
      errorMessage,
    };
  },
};
</script>

<style>
.input-roti-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.dropdown-items {
  justify-self: center;
  width: 30rem;
  height: 2rem;
}

.full-width {
  grid-column: 1 / 3;
  margin: auto 3rem;
}

#cars {
  justify-content: space-around;
}

.radio-btn {
  margin: 1.5rem;
  font-size: 2em;
  align-items: baseline;
}

input[type="radio"] {
  height: 2em;
  width: 2em;
  border: 0px;
}

button {
  padding: 1rem;
  background-color: #6a1cc3;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
}

select:invalid {
  border: 2px dashed red;
}

select:valid {
  border: 2px solid black;
}
</style>
