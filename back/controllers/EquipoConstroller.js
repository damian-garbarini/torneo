const Equipo = require("../models/equipo");

class EquipoControllers {

	async findAll(){
		try {
			return await Equipo.find();
		} catch (error) {
			throw error;
		}

	}
	async create(equipo){
		try {
			return await Equipo.create(equipo);
		} catch (error) {
			throw error;
		}

	}

	async delete(id){
		try {
			return await Equipo.findByIdAndDelete(id)
		} catch (error) {
			throw error;
		}

	}

}

module.exports = new EquipoControllers;


