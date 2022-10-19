var bouton1= document.getElementById("bouton1");
bouton1.addEventListener("click",clickbtn1)

function clickbtn1(){

    alert("Vous avez cliquer sur :\n Alerte");
}

var bouton2= document.getElementById("bouton2");
bouton2.addEventListener("click",clickbtn2)

function clickbtn2(){

    var prenom = prompt("Saisir votre prénom");
    if(prenom==null){

        alert("Vous avez cliquer sur annuler")
    }
    var age= parseInt(prompt("Saisir votre age"));
    if(isNaN(age)){

        alert("L'age n'est pas correct ! \nVeuillez recommencer.")
    }
    alert("Voici ce que vous avez saisi :\nVotre prénom : "+prenom+"\nVotre age :" +age);
}

var bouton3= document.getElementById("bouton3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3(){

    var reponse = confirm("Cliquer sur Annuler ou OK");
    if (reponse==true) {

    alert("Vous avez cliqué sur OK")
    }
    else  {

        alert("Vous avez cliqué sur Annuler")
    }

    
}

var bouton4= document.getElementById("bouton4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4(){
    
document.getElementById("4").innerHTML="Manger du riz";

console.log("Compte ton nombre de clique (f12)");

}

var age = 22;
document.write("<b>"+"Votre âge est "+ "</b>" + age + " ans ");

myVar = "Salut hermano"
window.alert(myVar + "  ;)")

var reponse1 = window.prompt("Tape ton nom frero")
if (reponse1==null) {

    alert("vous avez cliquer annuler")
}
