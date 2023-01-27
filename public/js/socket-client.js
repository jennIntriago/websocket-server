// Referencias del HTML
const lbnOnline = document.querySelector("#lbnOnline");
const lbnOffline = document.querySelector("#lbnOffline");

const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  console.log("conectado");

  lbnOffline.style.display = "none";
  lbnOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Desconectado del Servidor");

  lbnOnline.style.display = "none";
  lbnOffline.style.display = "";
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  //socket.on ==> escucha un evento
  //socket.emit ==> emite un evento
  const payload = {
    mensaje,
    id: "jenn",
    fecha: new Date().getTime(),
  };

  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el server", id);
  });
});
