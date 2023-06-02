const inform = console.log
// CRUD Application
/*
    C reate
    R ead
    U pdate
    D estroy

*/

// READing (All of the dat in a Collection)
function index(arrayOfAnimals) {
    return arrayOfAnimals.map((animal) => animal.id + " " + animal.name).join("\n");
};

function show(arrayOfAnimals, animalID) {
    const animalToFind
    return `${animal.id} ${animal.name} ${animal.points} points`;
};

module.exports = {
//   create,
//   destroy,
//   edit,
show,
index
}; 