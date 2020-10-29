// Modulos de node
const express = require('express');
const router = express.Router();
// Modulos internos
const { Auto } = require('../model/auto');
const { Usuario } = require('../model/usuario');
const auth = require('../middleware/auth');
// Rutas
// Registrar Actividad
router.post('/', auth, async(req, res)=>{
    // Obtenemos el id del usuario con correo y pass
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usuariono existe
    if(!usuario) return res.status(400).send('El usuario no existe');
    // Si existe el usuario creamos un nuevo auto
    const auto = new Auto ({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio,
        color: req.body.color
    });
    // Enviamos el resultado
    const result = await auto.save();
    res.status(200).send(result);
});
// exports
module.exports = router;