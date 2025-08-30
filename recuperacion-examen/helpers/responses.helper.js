
export const responseSuccess = (mensaje, datos) => {
  return {
    message: mensaje,
    data: datos,
  }
};

export const responseError = (mensaje) => {
  return {
    message: mensaje,
    data: null,
  }
};
