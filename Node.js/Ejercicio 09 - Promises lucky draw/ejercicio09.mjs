function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const players = [{ name: "Joe" }, { name: "Caroline" }, { name: "Sabrina" }];

players.map((player) =>
  luckyDraw(player.name)
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message))
);
