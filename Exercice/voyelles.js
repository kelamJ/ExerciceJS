let mot = prompt("Saisissez un mot : ");
// Donne le nombre de lettre dans le mot 
let longueurMot = mot.length;
voy = 0;
for (i = 0; i < longueurMot ;i++)
{   //   Le charAt renvoie une nouvelle chaîne contenant le caractère
    if (mot.charAt(i) == "a" || mot.charAt(i) == "e" || mot.charAt(i) == "i" || mot.charAt(i) == "o" || mot.charAt(i) == "u") {
        voy++;
    }
}
console.log("Le mot "+ mot  + " contient " +  longueurMot + " caractères dont " + voy + " voyelles");
