JAVASCRIPT — FIRST CHECKPOINT
Variables · Opérateurs · Conditions · Saisie et affichage
EXERCICE 1 — FICHE D’INFORMATIONS PERSONNELLES

Développez un programme JavaScript permettant de recueillir et d’afficher les informations d’un utilisateur.
Travail demandé
1. Demander à l’utilisateur de saisir son nom.
2. Demander son âge.
3. Demander son langage de programmation préféré.
4. Stocker les informations dans des variables.
5. Afficher un message récapitulatif à l’aide de alert().
Exemple de résultat attendu
Bonjour Ahmed !
Vous avez 20 ans.
Votre langage préféré est JavaScript.
Question supplémentaire : Calculer et afficher l’âge de l’utilisateur dans 5 ans.

EXERCICE 2 — CALCULATRICE SIMPLE

Développez une calculatrice permettant d’effectuer les quatre opérations arithmétiques de base.
Travail demandé
1. Demander à l’utilisateur de saisir deux nombres.
2. Convertir les valeurs saisies en nombres.
3. Calculer la somme, la différence, le produit et le quotient.
4. Afficher les résultats dans la console avec console.log().
5. Vérifier que le deuxième nombre est différent de zéro avant d’effectuer la division.
Exemple de résultat attendu
Premier nombre : 20
Deuxième nombre : 5

Addition : 25
Soustraction : 15
Multiplication : 100
Division : 4
Question supplémentaire : Permettre à l’utilisateur de choisir une seule opération parmi +, -, * et /, puis afficher uniquement son résultat.

EXERCICE 3 — SYSTÈME D’ÉVALUATION DES ÉTUDIANTS

Développez un programme JavaScript permettant d’évaluer automatiquement le résultat d’un étudiant à partir de sa note.
Travail demandé
1. Demander le nom de l’étudiant.
2. Demander sa note sur 20.
3. Utiliser les conditions if, else if et else pour déterminer sa mention.
4. Afficher le nom, la note et la mention obtenue.
Barème d’évaluation
Note inférieure à 10 : Échec
De 10 à moins de 12 : Passable
De 12 à moins de 14 : Assez bien
De 14 à moins de 16 : Bien
De 16 à 20 : Très bien
Exemple de résultat attendu
Étudiant : Sarah
Note : 15/20

Résultat : Bien
Félicitations Sarah !
Question supplémentaire : Vérifier que la note saisie est comprise entre 0 et 20. Dans le cas contraire, afficher un message d’erreur.

EXERCICE 4 — CALCUL D’UNE COMMANDE AVEC REMISE

Une boutique en ligne souhaite automatiser le calcul du montant des commandes et appliquer des remises selon le total des achats.
Travail demandé
1. Demander le nom du produit.
2. Demander son prix unitaire en dinars tunisiens (TND).
3. Demander la quantité commandée.
4. Calculer le montant total avant remise.
5. Déterminer le pourcentage de remise à appliquer en utilisant des conditions.
6. Calculer le montant de la remise et le prix final.
7. Afficher un récapitulatif de la commande.
Règles de remise
Montant inférieur à 100 TND : 0 %
De 100 à moins de 200 TND : 10 %
200 TND ou plus : 20 %
Exemple de résultat attendu
Produit : T-shirt
Prix unitaire : 50 TND
Quantité : 3

Total avant remise : 150 TND
Remise appliquée : 10 %
Montant de la remise : 15 TND

Total à payer : 135 TND
Question supplémentaire : Ajouter des frais de livraison de 7 TND si le montant après remise est inférieur à 150 TND. Sinon, la livraison est gratuite. Afficher le montant final, livraison comprise.

EXERCICE 5 — SIMULATION D’UN DISTRIBUTEUR AUTOMATIQUE (ATM)

Développez un programme JavaScript simulant une opération de retrait d’argent à partir d’un distributeur automatique.
Données initiales
let correctPin = "1234";
let balance = 500;
Travail demandé
1. Demander à l’utilisateur de saisir son code PIN.
2. Vérifier si le code saisi correspond au code enregistré.
3. Si le code est incorrect, afficher un message d’erreur et ne pas autoriser le retrait.
4. Si le code est correct, demander le montant du retrait.
5. Vérifier que le montant saisi est strictement positif.
6. Vérifier que le solde est suffisant pour effectuer le retrait.
7. Si toutes les conditions sont respectées, soustraire le montant retiré du solde.
8. Afficher le montant retiré et le nouveau solde.
Exemple 1 — Retrait réussi
Saisir votre code PIN : 1234
Montant du retrait : 200

Retrait effectué avec succès !
Montant retiré : 200 TND
Nouveau solde : 300 TND
Exemple 2 — Solde insuffisant
Saisir votre code PIN : 1234
Montant du retrait : 800

Erreur : solde insuffisant.
Solde disponible : 500 TND
Exemple 3 — Code PIN incorrect
Saisir votre code PIN : 5678

Erreur : code PIN incorrect.
Opération refusée.
Question supplémentaire : Autoriser uniquement les retraits dont le montant est un multiple de 10 TND, en utilisant l’opérateur modulo %.


