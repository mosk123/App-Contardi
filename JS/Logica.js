// const url = "https://randomuser.me/api/";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => mostrarData(data));

// const mostrarData = (data) => {
//   console.log(data);
// };

// Variables seleccionables en DOM
const botonForm = document.querySelector("#botonForm");
const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");
const imagen = document.querySelector("#img");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const geolocalizacion = document.querySelector("#geo");

// funciones
const generaUsuario = async () => {
  try {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];
    console.log(datos);

    img.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
  } catch (error) {
    console.log(error);
  }
};

boton?.addEventListener("click", generaUsuario);
document.addEventListener("DOMContentLoaded", generaUsuario);

// BOTON FORMULARIO

botonForm?.addEventListener("click", formulario.reset());
