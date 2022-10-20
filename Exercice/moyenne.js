let i = 0;
let nbr1 = parseInt(prompt("Saisissez un nombre entier :"));
let somme = nbr1;
while (nbr1 != 0)
{   
    console.log(nbr1);
    i++;
    nbr1 = parseInt(prompt("Saisissez un nombre entier :"));
    somme+=nbr1;
}
let moyenne = somme / i;
alert("La somme est de : " + somme + " et la moyenne est de : " + moyenne);

// Ecrire un programme qui calcule les N premiers 
// multiples d'un nombre entier X, N et X étant entrés au clavier.

// Exemple pour N=5 et X=7 :

// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21
// 4 x 7 = 28
// 5 x 7 = 35