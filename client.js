const { builtinModules } = require("module");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on("connect", () => {
    console.log('Connection Established')
  });

  conn.on('connect', () => {
    conn.write('Name: BKK');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  conn.on("data", (messageFromServer) => {
    console.log('Server says:', messageFromServer)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;