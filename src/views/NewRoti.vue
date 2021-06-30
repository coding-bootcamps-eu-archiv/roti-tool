<template>
  <h2>Neuer ROTI Eintrag</h2>
  <div id="formContainer">
    <Form class="input-roti-form" id="rotiForm" @submit="onSubmit">
      <div id="topicsWrapper">
        <Field
          as="select"
          name="topic"
          id="topics"
          class="dropdown-items"
          :rules="isRequired"
        >
          <option value="">--Wähle das Thema--</option>
          <option v-for="topics in topics" :key="topics.id" :value="topic">
            {{ topics.description }}
          </option>
        </Field>
        <br />
        <error-message class="errorMessage" name="topic"></error-message>
      </div>
      <div id="trainersWrapper">
        <Field
          as="select"
          name="trainer"
          id="trainers"
          class="dropdown-items"
          :rules="isRequired"
        >
          <option value="">--Wähle den Trainer--</option>
          <option
            :value="trainer"
            v-for="trainers in trainers"
            :key="trainers.id"
          >
            {{ trainers.name }}
          </option>
        </Field>
        <br />
        <error-message class="errorMessage" name="trainer"></error-message>
      </div>
      <div id="tasWrapper">
        <Field
          name="teachingAssistent"
          id="teachingAssistents"
          class="dropdown-items"
          as="select"
          :rules="isRequired"
        >
          <option value="">--Wähle den Teaching Ass.--</option>
          <option
            :value="teachingAssistent"
            v-for="teachingAssistents in teachingAssistents"
            :key="teachingAssistents.id"
          >
            {{ teachingAssistents.name }}
          </option>
        </Field>
        <br />
        <error-message
          class="errorMessage"
          name="teachingAssistent"
        ></error-message>
      </div>

      <div id="radioWrapper" class="full-width">
        <Field
          as="radio"
          name="ranking"
          id="ranking"
          class="radio-btn"
          :rules="isRequired"
        >
          <p>Gib dein Ranking ab</p>
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
        <error-message class="errorMessage" name="ranking"></error-message>
      </div>
      <div id="textareaWrapper">
        <Field
          as="textarea"
          name="textarea"
          id="textarea"
          placeholder="Gib dein Kommentar ab (max. 1000 Zeichen)"
          maxlength="1000"
          class="textarea"
          :rules="isRequired"
        >
          <textarea
            class="full-width"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
          ></textarea>
        </Field>

        <br />
        <error-message class="errorMessage" name="textarea"></error-message>
      </div>
      <div id="buttonWrapper">
        <button class="full-width" id="submitBtn">Absenden</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { ErrorMessage, Form, Field } from "vee-validate";
import {
  topics,
  trainers,
  teachingAssistents,
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
      trainers,
      teachingAssistents,
    };
  },
  methods: {
    isRequired: (value) => (value ? true : "This field is required"),
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
      this.$router.push("/Success");
    },
  },
};
</script>

<style>
/**
* general styling
 */
:root {
  --main-radius: 5px;
  --main-padding: 5px;
}
/**
* General Styling and grid areas for form content
*/

#topicsWrapper {
  grid-area: Topics;
}

#topics {
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#trainersWrapper {
  grid-area: Trainers;
}

#trainers {
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#tasWrapper {
  grid-area: TeachingAssistents;
}

#teachingAssistents {
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#radioWrapper {
  grid-area: Radio;
}

#radios {
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#textareaWrapper {
  grid-area: Textarea;
}

#textarea {
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#buttonWrapper {
  grid-area: Button;
}

#submitBtn {
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
  background-color: #6a1cc3;
  color: white;
  font-weight: bold;
}

/**
* Desktops Styling for larger screens
*/
@media only screen and (min-width: 550px) {
  #rotiForm {
    display: grid;
    height: 70vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 3fr 3fr 1fr;
    grid-template-areas:
      "Topics"
      "Trainers"
      "TeachingAssistents"
      "Radio"
      "Textarea"
      "Button";
    grid-gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    margin: 2rem;
  }
  #topics {
    width: 25rem;
    height: 2rem;
  }
  #trainers {
    width: 25rem;
    height: 2rem;
  }
  #teachingAssistents {
    width: 25rem;
    height: 2rem;
  }
  #radios {
    width: 25rem;
    height: 10rem;
  }
  #textarea {
    width: 25rem;
    height: 10rem;
  }
  #submitBtn {
    width: 20rem;
    height: 2rem;
  }
  .radio-btn {
    margin: 6px;
  }
}

/**
* Responsive Styling for small screens
*/
@media only screen and (max-width: 550px) {
  #rotiForm {
    display: grid;
    height: 70vh;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 1.5fr 2fr 1fr;
    grid-template-areas:
      "Topics"
      "Trainers"
      "TeachingAssistents"
      "Radio"
      "Textarea"
      "Button";
    grid-gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
  }
  #topics {
    width: 20rem;
    height: 2rem;
  }
  #trainers {
    width: 20rem;
    height: 2rem;
  }
  #teachingAssistents {
    width: 20rem;
    height: 2rem;
  }
  #radios {
    width: 20rem;
    height: 5rem;
  }
  #textarea {
    width: 20rem;
    height: 10rem;
  }
  #submitBtn {
    width: 8rem;
    height: 2rem;
  }
}
/**
* General styling for radio buttons
*/

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  height: 2.5rem;
  width: 2.5rem;
  border: 0.2rem solid #999;
  border-radius: 50%;
  transition: 0.2s all linear;
}

input[type="radio"]:checked {
  border: 0.6rem solid #6a1cc3;
}

/**
* General styling for error messages
 */
.errorMessage {
  color: red;
  font-weight: 200;
  text-transform: none;
  font-size: 12px;
}

.errorMessage::before {
  content: "🚨 ";
}
</style>
