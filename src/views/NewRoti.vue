<template>
  <h2>Neuer ROTI Eintrag</h2>

  <form action="">
    <section>
      <label for="cars">Choose a Thema:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <label for="cars">Choose a Trainer:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <label for="cars">Choose a Teaching Assistent:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <input placeholder="Date" class="textbox-n" type="date" id="date" />
    </section>
    <section>
      <p>Gib deine Ranking ab</p>
      <label for="1">1</label>
      <input type="radio" name="filter" id="1" value="1" />
      <label for="2">2</label>
      <input type="radio" name="filter" id="2" value="2" />
      <label for="3">3</label>
      <input type="radio" name="filter" id="3" value="3" />
      <label for="4">4</label>
      <input type="radio" name="filter" id="4" value="4" />
      <label for="5">5</label>
      <input type="radio" name="filter" id="5" value="5" />
    </section>
    <textarea name="Comment" id="comment" cols="30" rows="10"></textarea>
    <button>Absenden</button>
  </form>
</template>
