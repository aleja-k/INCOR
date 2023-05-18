//rutas para login
const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
//api/empleado

router.post('/', empleadoController.crearEmpleado)
router.get('/', empleadoController.obtenerEmpleado)
router.delete('/:id', empleadoController.eliminarEmpleado)
router.get('/:id', empleadoController.obtenerEmpleadoId)
router.put('/:id', empleadoController.actualizarEmpleado)

module.exports = router;