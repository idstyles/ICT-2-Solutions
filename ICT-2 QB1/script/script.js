window.addEventListener("load", addListners);

function addListners() {
  // Validate form when it is submitted
  document
    .getElementById("login-form")
    .addEventListener("submit", function (evt) {
      evt.preventDefault();
      validateForm();
    });
}

// Validates if username is Cognizant and password is Hello123
function validateForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (!(username == "Cognizant" && password == "Hello123")) {
    alert("Creditentials are not valid");
  } else {
    // Open homepage in same tab
    window.open("../pages/homepage.html", "_self");
  }
}
