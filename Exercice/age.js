  /*N°2 Age*/
  const dateDuJour = new Date();
  let anneeJour = dateDuJour.getFullYear();
  let anneeNaissance = window.prompt("Taper votre année de naissance :");

  function annee(x, y)
  {
    let age =  x - y;
    if (age >= 18){
      alert("Vous êtes majeur car vous avez " + age + " ans")
    }
    else if (age < 18 && age > 1){
      alert("Vous êtes mineur car vous avez " + age + " ans")
    }
    else {
      alert("Vous êtes mineur car vous avez " + age + " an")
    }
    
  }
  annee(anneeJour, anneeNaissance);