// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

   if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    resultado.innerHTML = "<li>Primero debes agregar al menos un amigo.</li>";
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
}