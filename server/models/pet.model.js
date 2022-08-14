const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at leat 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "Must include a type"],
        minlength: [3, "Type must be at least 3 characters!"]
    },
    skill1:{
        type: String,
        required: false,
    },
    skill2:{
        type: String,
        required: false,
    },
    skill3:{
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: [true, "Must include a description!"],
        minlength: [3, " Description must be at least 3 characters!"]
    }
}, { timestamps: true })

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;

