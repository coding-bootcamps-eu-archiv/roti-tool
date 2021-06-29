export const dataBase = {
  createRoti: (newRoti) => {
    newRoti.sysDate = Date();

    fetch("http://localhost:3000/rotis", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newRoti),
    });
  },

  getRotis: () => {
    fetch("http://localhost:3000/rotis")
      .then((response) => response.json())
      .then((rotiArray) => {
        console.log(rotiArray);
      });
  },
};
