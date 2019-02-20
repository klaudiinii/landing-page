document.getElementById("btn-click").addEventListener("click", function() {
  document.querySelector(".modal-section").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".modal-section").style.display = "none";
});

$(document).ready(function() {
  $(".toggle-menu").click(function() {
    $(".main-nav").toggleClass("toggle-active");
  });
});

