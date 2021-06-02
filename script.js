/* This section is to get the theme for the web page */

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "styles/default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "styles/blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "styles/green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "styles/purple.css";
  }

  localStorage.setItem("theme", mode);
}

/* This section is for form validation */

var form = document.getElementById("form-container");
var username = document.getElementById("formName");
var subject = document.getElementById("formSubject");
var email = document.getElementById("formEmail");
var message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  if (!checkInputs()) {
    e.preventDefault();
  } else {
    e.returnValue = true;
  }
});

function checkInputs() {
  //get values from inputs
  var nameValue = username.value.trim();
  var subjectValue = subject.value.trim();
  var emailValue = email.value.trim();
  var messageValue = message.value.trim();

  var validForm = 0;

  if (nameValue === "") {
    setErrorFor(username, "Name cannot be blank.");
  } else {
    setSuccessFor(username);
    validForm++;
  }

  if (subjectValue === "") {
    setErrorFor(subject, "Subject cannot be blank.");
  } else {
    setSuccessFor(subject);
    validForm++;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email.");
  } else {
    setSuccessFor(email);
    validForm++;
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank.");
  } else {
    setSuccessFor(message);
    validForm++;
  }

  if (validForm != 4) {
    //console.log("invalid submit");
    return false;
  } else {
    //console.log("valid submit");
    return true;
    alert("Email Sent. Thank You!");
  }
}

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";

  return false;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

  return true;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
