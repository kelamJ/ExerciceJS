let x = prompt("Entrez un nombre");
let y = prompt("Entrez un multiplicateur");
let clc1;
let clc2;
function i()
{
   let img = document.createElement("img");
   img.src = "https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg";
   let div = document.getElementById("i");
   div.appendChild(img);
}
let produit = function (x,y)
{
    clc1 = resultat = x * y;
}
let carre = function (x)
{
    clc2 = resultat2 = x * x * x;
}
produit(x,y);
carre(x,x,x);
i();
document.write('Le cube de ' + x +' est égal à ' + clc2);
document.write('<br>Le produit de ' + x +' est égal à ' + clc1);


