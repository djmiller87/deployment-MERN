const Pet = require('../models/pet.model');
const petRoutes = require('../routes/pet.routes');

module.exports = {
    findAllPets: (req, res) => {
        Pet.find()
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err) => {
                console.log("Find all Pets failed");
                res.json({ message: "Something went wrong with findAllPets", error: err })
            })
    },

    createNewPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewPet");
                res.status(400).json(err);
            })
    },

    findOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then((onePet) => {
                console.log(onePet);
                res.json(onePet);
            })
            .catch((err) => {
                console.log("Find one Pet failed!");
                res.json({ message: "Something went wrong in findOnePet", error: err });
            })
    },

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then((deletedPet) => {
                console.log("Delete one Pet failed");
                res.json(deletedPet);
            })
            .catch((err) => {
                console.log("Delete one Pet failed");
                res.json({ message: "Something went wrong in deletePet", error: err })
            })
    },

    updatePet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedPet) => {
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err) => {
                console.log("Something went wrong in updatePet");
                res.status(400).json(err);
            })
    }
}

