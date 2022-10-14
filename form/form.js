function validateForm() {
  var contact = document.getElementById("contact").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var email = document.getElementById("age").value;
  var email = document.getElementById("designation").value;
  var email = document.getElementById("dateBirth").value;
  var formValid = false;

  var contactBool = validateContact(contact, formValid);
  var nameBool = validateName(name, formValid);
  var emailBool = validateEmail(email, formValid);
  var ageBool = validateAge(age, formValid);
  var designationBool = validateDesignation(designation, formValid);
  var dateBool = validateDate(date, formValid);
  if (
    contactBool &&
    nameBool &&
    emailBool &&
    ageBool &&
    designationBool &&
    dateBool
  ) {
    document.getElementById("formError").innerHTML = "Form submitted";
    document.getElementById("contact").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("dateBirth").value = "";
  } else {
    document.getElementById("formError").innerHTML = "Please check the fields";
  }
}

function validateContact(contact, formValid) {
  if (contact.trim() === "") {
    formValid = false;
    document.getElementById("contactError").innerHTML =
      "Please enter contact number";
  } else if (contact.length < 10 || contact.length > 10) {
    formValid = false;
    document.getElementById("contactError").innerHTML =
      "Please enter contact number";
  } else {
    formValid = true;
    document.getElementById("contactError").innerHTML = "";
  }

  return formValid;
}

function validateName(name, formValid) {
  if (name.trim() == "") {
    formValid = false;
    document.getElementById("nameError").innerHTML = "Please enter name";
  } else if (name.length <= 3) {
    formValid = false;
    document.getElementById("nameError").innerHTML = "Please enter name";
  } else {
    formValid = true;
    document.getElementById("nameError").innerHTML = "";
  }

  return formValid;
}

function validateEmail(email, formValid) {
  if (email.trim() == "") {
    formValid = false;
    document.getElementById("emailError").innerHTML = "Please enter email";
  }
  // else if (!pattern.test(email)) {
  // formValid = false;
  // document.getElementById('emailError').innerHTML = 'Please enter email';
  // }
  else {
    formValid = true;
    document.getElementById("emailError").innerHTML = "";
  }

  return formValid;
}

function validateAge(age, formValid) {
  if (age.trim() === "") {
    formValid = false;
    document.getElementById("ageError").innerHTML = "Please enter age";
  } else if (age < 0 || age > 100) {
    formValid = false;
    document.getElementById("ageError").innerHTML = "Please enter age";
  } else {
    formValid = true;
    document.getElementById("ageError").innerHTML = "";
  }

  return formValid;
}

function validateDesignation(designation, formValid) {
  if (designation.trim() == "") {
    formValid = false;
    document.getElementById("designationError").innerHTML =
      "Please enter designation";
  } else {
    formValid = true;
    document.getElementById("designationError").innerHTML = "";
  }

  return formValid;
}

function validateDate(date, formValid) {
  if (date.trim() == "") {
    formValid = false;
    document.getElementById("dateError").innerHTML = "Please enter date";
  } else {
    formValid = true;
    document.getElementById("dateError").innerHTML = "";
  }

  return formValid;
}
