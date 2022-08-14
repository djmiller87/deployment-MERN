const PetController = require('../controllers/pet.controller');


module.exports = (app) => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets", PetController.createNewPet);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.delete("/api/pets/:id", PetController.deletePet);
    app.put("/api/pets/:id", PetController.updatePet);
}
