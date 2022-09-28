const net = require("net");
const name = "USA";

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541",
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
