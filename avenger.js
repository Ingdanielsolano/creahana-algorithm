const ticketPrice = 25;

const tickets = (people) => {
  let coinChanges = [];
  for (const ticket of people) {
    console.log(ticket);
    console.log(coinChanges);
    if (ticket === 25) {
      coinChanges.push(ticket);
      continue;
    }
    if (ticket === 50) {
      if (coinChanges.length === 0) return "NO";

      const index25 = coinChanges.findIndex((value) => value === 25);
      if (index25 < 0) return "NO";

      coinChanges.splice(index25, 1);
      coinChanges.push(ticket);
      continue;
    }

    if (ticket === 100) {
      if (coinChanges.length === 0) return "NO";

      const index50 = coinChanges.findIndex((value) => value === 50);
      const index25 = coinChanges.findIndex((value) => value === 25);
      if (index25 < 0) return "NO";

      if (index50 > -1) {
        coinChanges.splice(index50, 1);
        coinChanges.splice(index25, 1);
        coinChanges.push(ticket);
        continue;
      }
      let tempCoins = [...coinChanges];
      tempCoins.splice(index25, 1);

      const second25 = tempCoins.findIndex((value) => value === 25);
      if (second25 < 0) return "NO";

      tempCoins.splice(second25, 1);

      console.log({ tempCoins });

      const third25 = tempCoins.findIndex((value) => value === 25);
      if (third25 < 0) return "NO";

      tempCoins.splice(third25, 1);
      coinChanges = [...tempCoins];

      coinChanges.push(ticket);
      continue;
    }
  }
  return "SI";
};

module.exports = tickets;
