const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected Successfully");
  });

  conn.on("connect", () => {
    conn.write(`Name: USA`);
  });

  conn.on("data", (messageFromServer) => {
    console.log("Server:", messageFromServer);
  });

  return conn;
};

module.exports = {
  connect,
};
