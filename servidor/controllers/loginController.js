const Login = require("../models/login")

exports.crearUSuario =  async(req, res) => {
    try {
        let usuario;

        //creamos nuestro producto
        usuario = new Login(req.body);
        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
      const usuario = await Login.find();
      if (usuario.length === 0) {
        return res.status(404).json({ msg: 'Usuario no encontrado ' });
      }
      res.json(usuario);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Error del servidor');
    }
  };
