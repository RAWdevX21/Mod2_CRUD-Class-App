const { readJSONFile, writeJSONFile } = require("./src/helpers");
const {
  create,
  destroy,
  edit,
  index,
  show,
} = require("./src/animalsController.js");
const inform = console.log;

inform("This is the Notes.js file");

function run() {
  // console. log ("Our process Object: ", process)
  inform("Welcome to Our Animals App! 🦁");

  const action = process.argv[2]; // What "action" did the User type in?
  const animal = process.argv[3];
  let animals = readJSONFile("data", "animals.json");
  let writeToFile = false;
  let updatedAnimals = [];

  console.log("Here is the Data Read: ", animals);
  //console. log("List of Arguments for this process.arg: ", process.argv);

  switch (action) {
    case "index":
      inform("Hey look at all those chickens!");
      break;
    default:
      inform("Hey, we can't do that Fam 😕");

    case "show":
      const animalViewShow = show(animals, animal);
      inform(animalViewShow);
      break;
  }
  if (writeToFile) {
    writeJSONFile("data", "animals.json", updatedAnimals);
  }
}

run()