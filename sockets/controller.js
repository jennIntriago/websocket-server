const socketController = (socket) => {
  //   console.log("Cliente conectado", socket.id);

  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente DESCONECTADO", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    // servidor envia el mensaje

    const id = 12356;
    callback(id);
    // broadcast enviar msm a todos
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
