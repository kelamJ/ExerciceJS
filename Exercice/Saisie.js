
let i = 0;
let prenom = prompt("Saisissez le prénom "+(i+1)+" \nou Clic sur Annuler pour arrêter la saisie.");
while (prenom != "")
    {    
        console.log(prenom);
        i++;
        prenom = prompt("Saisissez le prénom "+(i+1)+"\nou Clic sur Annuler pour arrêter la saisie.");
    }
    console.log(i);
    /*Ecrire un programme qui saisit des entiers et 
    en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).*/