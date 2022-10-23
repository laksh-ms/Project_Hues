function enrolClass() {
  let fullName = prompt("What is your full name?");
  let contact = prompt("What is contact email/phone nunmber?");
  if (fullName !== "" && contact !== "") {
    alert(
      "Hi, " +
        fullName +
        "! Someone will contact you soon with the details of next meditative painting class."
    );
  } else {
    alert("Please enter valid details.");
  }
}
let takeClass = document.querySelector("button");
takeClass.addEventListener("click", enrolClass);
