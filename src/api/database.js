export default {
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
    return fetch("http://localhost:3000/rotis");
  },
};
