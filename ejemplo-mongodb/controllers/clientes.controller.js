//Handler para el metodo get de todos los clientes
const getClientesHandler = async (req, res) => {
  try{
    let response = {
      message: "success",
      data: {
        clients: clients,
        count: clients.length
      }
    };
    res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

export { 
  getClientesHandler
};
