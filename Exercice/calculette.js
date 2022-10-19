/*N°3 Calculette*/

let nombre1 = window.parseInt(prompt("Taper 1 nombre entier "));
let nombre2 = window.parseInt(prompt("Taper 1 nombre entier "));

let operateur = window.prompt("Saisir 1 opérateur (+,-,*,/");
console.log(operateur);
if (nombre1 !==  0 && nombre2 !== 0){
    if (operateur != '+' && operateur != '-' && operateur != '*' && operateur != '/')
    {
        alert ("Mauvais opérateurs veuillez réessayer")
    }
    else 
    {
        if (operateur == '+') 
        {
            let resultat = nombre1 + nombre2;
            alert ("Votre résultat :" + resultat );
        }   
        else if (operateur == '-')
        {
            let resultat = nombre1 - nombre2;
            alert ("Votre résultat :" + resultat );
        }
        else if (operateur == '*')
        {
            let resultat = nombre1 * nombre2;
            alert ("Votre résultat :" + resultat );
        }
        else if (operateur == '/')
        {
            let resultat = nombre1 / nombre2;
            alert ("Votre résultat :" + resultat );
        }
        
    }
}
else {
    alert("La valeur 0 ne peut pas être prise en compte");
}
