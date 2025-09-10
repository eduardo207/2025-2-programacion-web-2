// Ejemplo de destructuración de arrays en JavaScript
let arreglo = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

// Ejemplo sin destructuración
let uno = arreglo[0];
let cuatro = arreglo[3];
console.log(uno, cuatro); // Salida: uno cuatro

// Ejemplo con destructuración
let [primero, , , cuarto] = arreglo;
console.log(primero, cuarto); // Salida: uno cuatro

// Ejemplo de destructuración de objetos en JavaScript
let usuario = {
  "nombre": "Jerson Quiñonez",
  "telefono": "12345678",
  "email": "eduardo207@gmail.com",
  "imagenPerfil": "https://example.com/imagen.jpg"
}

// Ejemplo sin destructuración
let nombreUsuario = usuario.nombre;
let emailUsuario = usuario.email;
console.log(nombreUsuario, emailUsuario); 

// Ejemplo con destructuración
let {nombre, email} = usuario;
console.log(nombre, email); 

// Ejemplo de desstructuración en funciones
function mostrarDatos({nombre, imagenPerfil}) {
  console.log(`Nombre: ${nombre}, ImagenPerfil: ${imagenPerfil}`);
}
mostrarDatos(usuario);
