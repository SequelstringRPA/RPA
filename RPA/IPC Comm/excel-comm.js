const { PythonShell } = require("python-shell");
let myPythonScriptPath = "../python backend/Excel.py";

("use strict");
const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 8081 });
wss.on("connection", ws => {
  ws.on("message", msg => {
    // console.log(`received: ${message}`);
    let pyshell = new PythonShell(myPythonScriptPath);

    pyshell.send(msg);

    pyshell.on("message", function(message) {
      console.log(message);
    });

    pyshell.end(function(err) {
      if (err) {
        throw err;
      }

      console.log("finished");
    });
  });
  ws.on("end", () => {
    console.log("Connection ended...");
  });
  ws.send("Hello Client");
});
