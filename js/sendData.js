let dragNdrop = document.getElementsByClassName("drag-n-drop-div")[0];
let goBtn = document.getElementById("goBtn");
let clearButton = document.getElementsByClassName("clear-btn")[0];
let dragChild = dragNdrop.childNodes;
let childIdList = [];

clearButton.addEventListener("click", function() {
  childIdList = [];
});

goBtn.addEventListener("click", () => {
  for (let i = 0; i < dragChild.length; i++) {
    let temp = dragChild[i].id.split(" ")[1];
    childIdList.push(temp);
  }

  console.log("open: ");
  var ws = new WebSocket("ws://127.0.0.1:8081");
  ws.onopen = function(event) {
    console.log("Connection is open ...");
    ws.send(childIdList);
  };
  ws.onerror = function(err) {
    console.log("err: ", err);
  };
  //   ws.onmessage = function(event) {
  //     console.log("onMessage here");
  //   };
  ws.onclose = function() {
    console.log("Connection is closed...");
  };
});

//modal data
let saveBtn = document.getElementById("upload-file-save");
let fileName = document.getElementById("excel-file-name").childNodes[1]
  .textContent;
let excelForm = document.getElementById("excel-form");

console.log(fileName);

excelForm.addEventListener("submit", function(e) {
  fileName = document.getElementById("excel-file-name").childNodes[1]
    .textContent;
  e.preventDefault();
  console.log(fileName);

  //modal variable is from app.js
  modal.classList.toggle("show-modal");
});
