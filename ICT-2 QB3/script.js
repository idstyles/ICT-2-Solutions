function disableKeys(e) {
  if (
    e.keyCode == 43 ||
    e.keyCode == 45 ||
    e.keyCode == 46 ||
    e.keyCode == 101
  ) {
    e.preventDefault();
  }
}

function firstHandler(e) {
  const pattern = /^([a-zA-Z]+)$/;

  const interval = setInterval(function () {
    if (pattern.test(e.target.value)) {
      if (e.target.value.length < 3) {
        document.querySelector("#first").innerHTML =
          "Please input atleast 3 alphabets.";
      } else if (e.target.value.length > 100) {
        document.querySelector("#first").innerHTML =
          "You cannot input more than 100 alphabets.";
      } else {
        document.querySelector("#first").innerHTML = "";
        clearInterval(interval);
      }
    } else {
      if (e.target.value.length == 0) {
        document.querySelector("#first").innerHTML =
          "This input cannot be empty.";
      } else {
        document.querySelector("#first").innerHTML =
          "Please enter only alphabets.";
      }
    }
  }, 800);
}

function lastHandler(e) {
  const pattern = /^([a-zA-Z]+)$/;

  const interval = setInterval(function () {
    if (pattern.test(e.target.value)) {
      if (e.target.value.length < 3) {
        document.querySelector("#last").innerHTML =
          "Please input atleast 3 alphabets.";
      } else if (e.target.value.length > 100) {
        document.querySelector("#last").innerHTML =
          "You cannot input more than 100 alphabets.";
      } else {
        document.querySelector("#last").innerHTML = "";
        clearInterval(interval);
      }
    } else {
      if (e.target.value.length == 0) {
        document.querySelector("#last").innerHTML =
          "This input cannot be empty.";
      } else {
        document.querySelector("#last").innerHTML =
          "Please enter only alphabets.";
      }
    }
  }, 800);
}

function bdayHandler(e) {
  const interval = setInterval(function () {
    if (e.target.value.slice(0, 4) >= 2004) {
      document.querySelector("#birth").innerHTML =
        "You should be atleast 18 years old.";
    } else {
      document.querySelector("#birth").innerHTML = "";
      clearInterval(interval);
    }
  }, 800);
}

function mailHander(e) {
  const pattern = /^\S+@\S+$/;
  const interval = setInterval(function () {
    if (!pattern.test(e.target.value)) {
      if (e.target.value.length == 0) {
        document.querySelector("#mail").innerHTML =
          "This input cannot be empty.";
      } else {
        document.querySelector("#mail").innerHTML =
          "Please input correct e-mail.";
      }
    } else {
      document.querySelector("#mail").innerHTML = "";
      clearInterval(interval);
    }
  }, 800);
}

function phoneHandler(e) {
  const pattern = /^([0-9]+)$/;
  const interval = setInterval(function () {
    if (pattern.test(e.target.value)) {
      if (e.target.value.length < 10) {
        document.querySelector("#num").innerHTML =
          "Please enter 10 digit phone number.";
      } else if (e.target.value.length > 10) {
        document.querySelector("#num").innerHTML =
          "You cannot enter more than 10 digits.";
      } else {
        document.querySelector("#num").innerHTML = "";
        clearInterval(interval);
      }
    } else {
      document.querySelector("#num").innerHTML = "This field cannot be empty.";
    }
  }, 800);
}

function dropdownHandler(e) {
  if (e.target.value != "new") {
    document.querySelector("#subscription").innerHTML =
      "Please select an option.";
  } else {
    document.querySelector("#subscription").innerHTML = "";
  }
}

function submitHandler(e) {
  e.preventDefault();

  let gender = "";
  if (document.querySelector("#gender").checked) {
    gender = "Male";
  } else {
    gender = "Female";
  }

  localStorage.setItem(
    "First_Name",
    document.querySelector("#firstname").value
  );
  localStorage.setItem("Last_Name", document.querySelector("#lastname").value);
  localStorage.setItem("Birthday", document.querySelector("#birthday").value);
  localStorage.setItem("Gender", gender);
  localStorage.setItem("Email", document.querySelector("#email").value);
  localStorage.setItem("Phone_Number", document.querySelector("#phone").value);
  localStorage.setItem("Subject", document.querySelector("#subject").value);

  e.target.innerHTML = "Thanks! Your form is submitted.";
}
