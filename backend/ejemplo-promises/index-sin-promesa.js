// Ejemplo sin utilizar promesas
// Hace las dos llamdas en paralelo y se ejecuta segun la que responda primero.
const consultaSaldo = () => {
  setTimeout(() => {
    const saldo = 1000; 
    console.log('El saldo de la cuenta es: ', saldo);
    return saldo;
  },5000);
}

const entregarDinero = () => {
  console.log("Entrega el dinero");
}

// Funciones de cajero automatico
const saldo = consultaSaldo();
entregarDinero();
