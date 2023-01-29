const express = require('express');
const dotenv = require('dotenv').config();
const cors = require("cors");
const EquipoControllers = require("./controllers/EquipoConstroller");

//base de datos
require ("./database/conexion")
const PORT = process.env.PORT || 3001;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//rutas
app.get('/', async (req, res) => {
		res.json({
		equipo: await EquipoControllers.findAll()
	}); 
});

app.post('/crear', async (req, res) => {
	console.log(req.body);
	await 	EquipoControllers.create(req.body);
	res.json("Usuario creado") 
	
});

app.delete('/:id', async (req, res) => {
	console.log(req.params.id);
	const id = req.params.id;
	console.log(id);
	await EquipoControllers.delete(id);
	res.json("Usuario eliminado") 
});

//puerto

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
})




