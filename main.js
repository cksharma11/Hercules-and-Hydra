const { chopHeadTillAlive } = require("./src/chop-head");

const main = () => {
  const heads = [3, 3, 3];
  console.log(chopHeadTillAlive(heads));
};

main();
