const { PythonShell } = new require("python-shell");
let scriptPath = "../python backend/read_email _test.py";

let options = {
  mode: "text",
  pythonOptions: ["-u"],
  args: ["internshipjs@gmail.com", "@qwerty1234", ["saadskhan15@gmail.com"]]
};

let pythonshell = new PythonShell(scriptPath, options);

pythonshell.on("message", function(message) {
  console.log(message);
});

pythonshell.end(function(err) {
  if (err) {
    throw err;
  }

  console.log("finished");
});
