const mongoose=require("mongoose");
const {Schema}= require("mongoose");

const EquipoSchema = new Schema({
    nombre: {
        type: "string",
        required: true
    },
    equipos: {
        type: "string",
        required: true
    },
    dni: {
        type: "string",
        required: true
    } ,
    timestamp: {
        type: "Date",
        default: new Date()
    }
})	


const Equipo = mongoose.model("equipo", EquipoSchema);

module.exports = Equipo