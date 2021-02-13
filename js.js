let nameForm = document.querySelector("#nameForm");

nameForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameForm.elements.family.value;
  if (name == "Ania") {
    location.href = "A.html";
  } else if (name == "Lena") {
    location.href = "L.html";
  } else if (name == "Pola") {
    location.href = "P.html";
  } else {
    alert("Invalid Input");
  }
  nameForm.elements.family.value = "";
});
