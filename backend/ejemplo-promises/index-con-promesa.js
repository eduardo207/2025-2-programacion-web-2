// Ejemplo Utilizando promesas.
const consultaSaldo = new Promise((resolve, reject) => {
  const todoBien = false;

  setTimeout(() => {
    if (todoBien){
      resolve("Tiene saldo suficiente,");
    }else{
      reject("Su saldo es insuficiente");
    }
  },5000);
});
const entregarDinero = () => {
  console.log("Entrega el dinero");
}
// Funciones de cajero automatico
consultaSaldo
  .then((mensaje) => {
    console.log(mensaje);
    entregarDinero();
  })
  .catch((mensaje) => {
    console.log(mensaje);
  })
  .finally((mensaje) => {
    console.log('Se finaliza la promesa');
  });

