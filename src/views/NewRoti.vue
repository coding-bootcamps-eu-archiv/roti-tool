<template>
  <h2>Neuer ROTI Eintrag</h2>

  <Form class="input-roti-form" @submit="onSubmit">
    <div>
      <Field
        as="select"
        name="topic"
        id="topics"
        class="dropdown-items"
        :rules="isRequired"
      >
        <option value="">--Thema--</option>
        <option v-for="topics in topics" :key="topics.id" :value="topic">
          {{ topics.description }}
        </option>
      </Field>
      <br />
      <error-message name="topic"></error-message>
    </div>
    <div>
      <Field
        as="select"
        name="trainer"
        id="trainer"
        class="dropdown-items"
        :rules="isRequired"
      >
        <option value="">--Trainer--</option>
        <option :value="trainer" v-for="trainer in trainer" :key="trainer.id">
          {{ trainer.name }}
        </option>
      </Field>
      <br />
      <error-message name="trainer"></error-message>
    </div>
    <div>
      <Field
        name="teachingAssistent"
        id="teachingAssistent"
        class="dropdown-items"
        as="select"
        :rules="isRequired"
      >
        <option value="">--Teaching Assistent--</option>
        <option
          :value="teachingAssistent"
          v-for="teachingAssistent in teachingAssistent"
          :key="teachingAssistent.id"
        >
          {{ teachingAssistent.name }}
        </option>
      </Field>
      <br />
      <error-message name="teachingAssistent"></error-message>
    </div>
    <input
      placeholder="date"
      class="textbox-n dropdown-items"
      type="date"
      id="date"
    />
    <div class="full-width">
      <Field
        as="radio"
        name="ranking"
        id="ranking"
        class="radio-btn"
        :rules="isRequired"
      >
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
      </Field>
      <br />
      <error-message name="ranking"></error-message>
    </div>
    <div>
      <Field
        as="textarea"
        name="textarea"
        id="textarea"
        class="textarea"
        :rules="isRequired"
      >
        <textarea
          class="full-width"
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          placeholder="Gib dein Kommentar ab (1000 Zeichen)"
          maxlength="1000"
        ></textarea>
      </Field>

      <br />
      <error-message name="textarea"></error-message>
    </div>
    <button class="full-width">Absenden</button>
  </Form>
</template>

<script>
import { ErrorMessage, Form, Field } from "vee-validate";
import {
  topics,
  trainer,
  teachingAssistent,
} from "@/components/dropdownContent.js";

export default {
  name: "NewRoti",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data: () => {
    return {
      topics,
      trainer,
      teachingAssistent,
    };
  },
  methods: {
    isRequired: (value) => (value ? true : "This field is required"),
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>

<style>
label {
  font-size: 2.3rem;
}

#textarea {
  width: 800px;
  height: 100px;
}

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
