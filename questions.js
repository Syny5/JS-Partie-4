/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieurs façons de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.slice(4,5);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return isNaN(texte);
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
// split crée une liste des caractères demandés, le length permet, lui, de calculer la taille
    return texte.split(' ').length -1;
}
var InverseString = function (texte) {
  // split pour créer une liste, reverse pour l'inverser, join pour recoller les morceaux
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    var valeur = array.map(Math.abs);
    return valeur;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * rayon * rayon);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    var imc = (poids / ( taille * taille )).toFixed(2);
    return Number(imc);
}
