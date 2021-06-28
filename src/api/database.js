/**
     * 
thema
trainer
teachingAssistent
date
rotiValue
rotiText
*/

export default {
  createRoti: (
    thema,
    trainer,
    teachingAssistent,
    date,
    rotiValue,
    rotiText
  ) => {},
  getRotis: () => {
    fetch("http://localhost:4730/books")
      .then((response) => response.json())
      .then((rotis) => {
        this.rotis = rotis;
      });
  },
};
