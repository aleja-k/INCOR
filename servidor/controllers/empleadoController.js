const Empleado = require("../models/empleado")

exports.crearEmpleado =  async(req, res) => {
    try {
        let empleado;

        //creamos nuestro empleado
        empleado = new Empleado(req.body);
        await empleado.save();
        res.send(empleado);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerEmpleado = async (req, res) => {
    try {
      const empleado = await Empleado.find();
      if (empleado.length === 0) {
        return res.status(404).json({ msg: 'Empleado no encontrado ' });
      }
      res.json(empleado);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Error del servidor');
    }
  };


  exports.eliminarEmpleado = async ( req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(400).json({msg: 'No existe el empleado'});
        }
        await Empleado.findOneAndRemove({_id: req.params.id})
        res.json({msg: "Empleado eliminado con exito"});

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    } 
}
exports.actualizarEmpleado= async ( req, res) => {
  try {
      const {valorKilo,nombre,apellido,kilo, descuentos, pago} = req.body;
      let empleado = await Empleado.findById(req.params.id);

      if(!empleado){
          res.status(400).json({msg: 'No existe el empleado'});
      }
      empleado.valorKilo = valorKilo;
      empleado.nombre = nombre;
      empleado.apellido =apellido;
      empleado.kilo = kilo;
      empleado.descuentos = descuentos;
      empleado.pago = pago;

      empleado = await Empleado.findOneAndUpdate({_id: req.params.id}, empleado,{new:true})
      res.json(empleado)


  } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error')
  } 
}

exports.obtenerEmpleadoId = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ msg: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor al obtener el id empleado');
  }
};

