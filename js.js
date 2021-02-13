let nameForm = document.querySelector("#nameForm");

nameForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameForm.elements.family.value;
  if (name == "bob") {
    location.href = "A.html"; 
  }
  else if (name == "john") {
    location.href = "L.html"; 
  }
  else if (name == "pat") {
    location.href = "P.html";
  } 
    else
    {
        alert("Invalid Input");
    }
    nameForm.elements.family.value = '';
  });

