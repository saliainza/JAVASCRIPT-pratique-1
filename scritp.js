/* Exercie 1 */
let name = prompt("Saisissez votre nom");
let age = Number(prompt("Donnez votre age"));
let programme = prompt("Entrez votre langage de programmation préféré");

alert("bonjour "+ name +"!\n" +
    "vous avez " + age + "ans.\n" +
    "votre langage de programmation préféré est le " + programme + "\n" +
    "dans 5 ans, vous aurez :" + (age + 5) + "ans."
);
/* Exercie 2 */
let a = Number(prompt("Entrez le premier Nombre :"));
let b = Number(prompt("Entrez le deuxième nombre :"));

console.log("addition: " + (a + b));
console.log("soustraction : " + (a-b));
console.log ("multiplication : " + (a*b));
console.log("Division :"+ (a/b));

/* question supplementaire ici */

/* Exercie 3 */
let nameE = prompt ("Entrez votre nom Etudiant"); 
let note = Number(prompt("Entrez votre note Etudiant "));
let mention;
if (note < 10) {
    mention = "Echec" ;
} else if (note >= 10 && note < 12) {
    mention = "Passable" ;
}else if (note > 12 && note <= 14) {
    mention = "Assez bien" ;
}else if (note > 14 && note <= 16) {
    mention = "Bien" ;
}else {
    mention = "Très bien" ;
}

console.log ("Etudiant : " + nameE);
console.log ("Note : " + note + "/20");
console.log ("Résultat : " + mention );
console.log ("Félicitation" + nameE + "!");

/* question suplementaire ici */

/* Exercice 4 */
let product = prompt("Entrez le nom du produit");
let Uprice = Number(prompt ("Entrez le prix unitaire"));
let quantite = Number(prompt("Entrez la quantité souhaitée"));

let total = quantite * Uprice ;
let remise;
let Mremise;

if (total<100) {
    remise = "0" ;
}else if (total >= 100 && total< 200) {
    remise = "10" ;
}else {
    remise = "20" ; 
}

Mremise = total * remise / 100; 

let prixFinal = total - Mremise

let livraison;

if (prixFinal < 150){
    livraison = 7
} else {
    livraison = 0
}

let montantFinal = prixFinal + livraison

console.log("Produit : " + product);
console.log("Prix unitaire : " + Uprice + " TND");
console.log("Quantité : " + quantite);
console.log("Total avant remise : " + total + " TND");
console.log("Remise appliquée : " + remise + "%");
console.log("Montant de la remise : " + Mremise + " TND");
console.log("Total à payer : " + montantFinal + " TND");

/* Exercice 5 */
let correctPin = "1234";
let balance = 500;

let saisirPin = prompt("saisissez votre code PIN");

if (saisirPin === correctPin) {
    let montantR = Number(prompt("Saissisez le montant de retrait : " ));
    
    if (montantR <= 0 || Number.isNaN(montantR)) {
        console.log("Erreur : montant invalide");
    }
    else if (montantR > balance) {
        console.log("Erreur : solde insuffisant");
        console.log("Solde disponible : " + balance + " TND");
    }
    else {
        balance = balance - montantR;

        console.log("Retrait effectué avec succès !");
        console.log("Montant retiré : " + montantR + " TND");
        console.log("Nouveau solde : " + balance + " TND");
    }

}
else {
    console.log("Erreur : code PIN incorrect");
    console.log("Opération refusée");
}
