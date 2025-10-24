// Ejemplo Utilizando async/await
const consultaSaldo = async () => {
  return new Promise((resolve, reject) => {
    const todoBien = true;

    setTimeout(() => {
      if (todoBien){
        resolve("Tiene saldo suficiente,");
      }else{
        reject("Su saldo es insuficiente");
      }
    },5000);
  });
}
const entregarDinero = () => {
  console.log("Entrega el dinero");
}
const cajero5B = async () => {
  try {
    const mensaje = await consultaSaldo();
    console.log(mensaje);
    entregarDinero();
  }catch(e){
    console.log("Su saldo es insuficiente");
  }
  
}
cajero5B();


