const PORT = process.env.PORT || 1337;
const app = require("./app");

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

init();
