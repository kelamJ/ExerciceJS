let x = parseInt(prompt("Saisissez un nombre que voulez multipliez"));
let t = parseInt(prompt("Saisissez le nombre de multiple que vous voulez afficher"));
let n = 0;
for (n = 1; n <= t; n++  )
{
    resultat = x * t;
    console.log( x +" x " + n + " = " + (x *n ))
}