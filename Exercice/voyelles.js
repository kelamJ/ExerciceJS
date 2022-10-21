let mot = prompt("Saisissez un mot : ");
let longueurMot = mot.length;
let voy = 0;
let string = mot.substring(longueurMot);
for (i = 0; i < longueurMot ;i++)
{
    if (mot === 'a' || mot  === 'e' || mot  === 'i' || mot  === 'o' || mot  === 'u' || mot  === 'y'){
        voy++;
    }
}
console.log("Le mot "+ mot  + " contient " +  mot.length + " caractères dont " + voy + " voyelles");
