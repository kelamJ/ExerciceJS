
let i = 0;
let prenom = prompt("Saisissez le prénom "+(i+1)+" \nou Clic sur Annuler pour arrêter la saisie.");
while (prenom != "")
    {    
        console.log(prenom);
        i++;
        prenom = prompt("Saisissez le prénom "+(i+1)+"\nou Clic sur Annuler pour arrêter la saisie.");
    }
    console.log(i);