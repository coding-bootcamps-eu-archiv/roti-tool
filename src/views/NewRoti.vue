<template>
  <h2>Neuer ROTI Eintrag</h2>

  <form class="input-roti-form">
    <select name="Thema" id="thema" class="dropdown-items">
      <option value="volvo">--Thema--</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <select name="Trainer" id="trainer" class="dropdown-items">
      <option value="volvo">--Trainer--</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <select name="TA" id="ta" class="dropdown-items">
      <option value="volvo">--Teaching Assistent--</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <input
      placeholder="Date"
      class="textbox-n dropdown-items"
      type="date"
      id="date"
    />
    <div class="full-width">
      <p>Gib deine Ranking ab</p>
      <span class="radio-btn">
        <input type="radio" name="filter" id="1" value="1" />
        <label for="1">1</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="filter" id="2" value="2" />
        <label for="2">2</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="filter" id="3" value="3" />
        <label for="3">3</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="filter" id="4" value="4" />
        <label for="4">4</label>
      </span>
      <span class="radio-btn">
        <input type="radio" name="filter" id="5" value="5" />
        <label for="5">5</label>
      </span>
    </div>
    <textarea
      class="full-width"
      name="Comment"
      id="comment"
      cols="30"
      rows="10"
      placeholder="Gib dein Kommentar ab (1000 Zeichen)"
      maxlength="1000"
    ></textarea>
    <button class="full-width">Absenden</button>
  </form>
</template>

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

.thema-trainer {
}

.thema {
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
</style>
