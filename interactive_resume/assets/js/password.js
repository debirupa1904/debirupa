
document.addEventListener("DOMContentLoaded", function () {
  var password = prompt("Enter access code:");
  if (password === "yourpass123") {
    document.getElementById("main-content").style.display = "block";
  } else {
    document.body.innerHTML = "<h2>Access Denied</h2>";
  }
});
