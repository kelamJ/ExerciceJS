// // Creation d'un tableau avec array
// var myTableau = Array("pomme", 'ananas', "poire", 'figue'); 
// var myTableau2 = Array(666, 123, 777, 456); 
// console.log(myTableau[2]);
// var nb = myTableau.length ;
// console.log("Le tableau contient "+nb+ " éléments");
// // Combiner des tableau
// let fruits = ["pomme", 'ananas', "poire", 'figue'];
// let nombres = [666, 123, 777, 456];
// total = fruits.concat(nombres)
// console.log(total)

// for (var fruit in myTableau) 
// {
//    console.log("Fruit : "+myTableau[fruit]);
// }

// // Pour remplir un tableau vide 
// var myTableau2 = [];
// myTableau2[0] = ["chien"];  
// myTableau2[1] = ["chat"];  

// var tab1 = []; 
// tab1[0] = ["poireau", "tomate", "carotte"];
// tab1[1] = ["pomme", "poire", "banane"];  
// console.log(tab1[1][2]); 

// Exercice 1
// tailleTableau = parseInt(prompt("Entrez le nombre de case voulu dans le  tableau"));
// let tableau = new Array(tailleTableau);
// for (i = 0; i < tailleTableau; i++)
// {
//     tableau[i] = prompt("choisir une valeur");
    
// }

// console.table(tableau);

// Exercice 2
// let GetInteger = parseInt(prompt("Entrez le nombre de case voulu dans le  tableau"));
// let tableau = new Array(GetInteger);
// for (i = 0; i < GetInteger; i++)
// {
//     tableau[i] = prompt("choisir une valeur");
    
// }

// console.table(tableau);

function getInteger()
{
    tailleTableau = parseInt(prompt("Entrez le nombre de case voulu dans le  tableau"));
}
getInteger();

let x = tailleTableau;

function initTab()
{
    tableau = new Array(x);
}
initTab();

function saisieTab()
{
    for (i = 0; i < x; i++)
    {
        tableau[i] = prompt("choisir une valeur");
    }
    console.table(tableau);
}
saisieTab();

function afficheTab()
{
    document.write(tableau);
}


function rechercheTab()
{
    rang = prompt("Entrez le rang que vous souhaitez afficher");
    choix = tableau[(rang - 1)];
   
    document.write(choix);
}

