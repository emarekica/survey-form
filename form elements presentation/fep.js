"use stric";

// drag 'n' drop
var fileInput = document.querySelector("input[type=file]");
var filenameContainer = document.querySelector("#filename");
var dropzone = document.querySelector("div");

fileInput.addEventListener("change", function () {
  filenameContainer.innerText = fileInput.value.split("\\").pop();
});

fileInput.addEventListener("dragenter", function () {
  dropzone.classList.add("dragover");
});

fileInput.addEventListener("dragleave", function () {
  dropzone.classList.remove("dragover");
});

// ----
// use sessionStorage
// make validation
