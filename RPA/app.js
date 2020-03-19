let file = document.querySelector("input[type=file]");
let insertFileName = document.querySelector(".file-name-txt span");
let name = "";

file.addEventListener("change", function(e) {
  name = e.target.files[0].name;
  insertFileName.textContent = name;
});

//Modal Start
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  insertFileName.textContent = "";
  name = "";
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    insertFileName.textContent = "";
    toggleModal();
  }
}

// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//Modal End

//Sidebar Starts
function openNav() {
  document.getElementsByClassName("closebtn")[0].style.display = "block";
  document.getElementById("mySidebar").style.width = "340px";
}

function closeNav() {
  document.getElementsByClassName("closebtn")[0].style.display = "none";
  document.getElementById("mySidebar").style.width = "0";
}
function allowdrop(ev) {
  ev.preventdefault();
}
function drag(ev) {
  // body...
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventdefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
$("#mySidebar").click(function() {
  $("#my-file").click();
});
//Sidebar Ends

//left-sidebar click
let loginDiv = document.querySelector(".login-div");
let signupDiv = document.querySelector(".signup-div");
let fileInputDiv = document.querySelector(".file-upload-div");

let loginForm = document.querySelector(".login-form");
let signUpForm = document.querySelector(".signup-form");
let fileInputForm = document.querySelector(".file-input-div");

// Drag n Drop Starts
$(document).ready(function() {
  var dragOpts = {
      containment: "document",
      helper: "clone",
      opacity: 0.7,
      zIndex: 10000,
      appendTo: "body"
    },
    dropOpts = {
      tolerance: "fit",
      drop: function(e, ui) {
        if (ui.draggable.hasClass("drag-drop")) {
          var cloneElement = ui.draggable.clone(),
            cloneDragOpts = {
              containment: ".drag-n-drop-div"
            };
          // cloneElement.removeAttr("id");
          cloneElement.removeClass();
          cloneElement.addClass("open");
          cloneElement
            .css({
              position: "absolute",
              top: ui.offset.top - $(this).offset().top,
              left: ui.offset.left - $(this).offset().left
            })
            .draggable(cloneDragOpts);
          $(this).append(cloneElement);
        }
      }
    };

  $(".drag-drop").each(function(index) {
    $(this).draggable(dragOpts);
  });

  $(".drag-n-drop-div").droppable(dropOpts);
});
//Drag n Drop Ends

//Click on Clone to Open Modal [EXPERIMENTAL]

document.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("open")) {
    var modal = document.querySelector(".modal");
    var openModal = document.querySelectorAll(".open");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
      insertFileName.textContent = "";
      name = "";
      modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
      if (event.target === modal) {
        insertFileName.textContent = "";
        toggleModal();
      }
    }

    // for (var i = 0; i < openModal.length; i++) {
    //   openModal[i].addEventListener("click", toggleModal);
    // }

    toggleModal();

    // closeButton.addEventListener("click", toggleModal);
    // window.addEventListener("click", windowOnClick);
  }
});

//ENDS

// Clear Btn STARTS

let clearBtn = document.getElementsByClassName("clear-btn")[0];
let divToBeCleared = document.getElementsByClassName("drag-n-drop-div")[0];

clearBtn.addEventListener("click", () => {
  while (divToBeCleared.firstChild)
    divToBeCleared.removeChild(divToBeCleared.firstChild);
});

// ENDS

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
