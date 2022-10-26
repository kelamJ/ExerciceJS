
let string = "<h1>robert ;<h1>dupont ;<h1>amiens ;<h1>80000";

let str2 = ";";
function strtok(str1, str2, n) 
{
    str2 = string.split(str2);
    document.getElementById('x').innerHTML = str2[n-1];
}
let n = parseInt(prompt('Entrez le numero du mot voulu'));

strtok(string, str2, n);