const Producto = require("../models/producto")

exports.crearProducto =  async(req, res) => {
    try {
        let producto;

        //creamos nuestro producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
      const productos = await Producto.find();
      if (productos.length === 0) {
        return res.status(404).json({ msg: 'Producto no encontrado 1' });
      }
      res.json(productos);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Error del servidor');
    }
  };

exports.actualizarProducto = async ( req, res) => {
    try {
        const {nombre,categoria,ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(400).json({msg: 'No existe el producto'});
        }
        producto.nombre = nombre;
        producto.categoria =categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto,{new:true})
        res.json(producto)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    } 
}

exports.obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }
};

exports.eliminarProducto = async ( req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(400).json({msg: 'No existe el producto'});
        }
        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg: "Producto eliminado con exito"});

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    } 
}