"use strict";

// ------------------------------ DÉCLARATION DES VARIABLES ------------------------------ //
var contenuPanierElt = document.getElementById("contenuPanier");
var monPanier = getProducts(); // ------------------------------ AFFICHAGE DU BLOC PANIER ------------------------------ //
// ----- Gestion de l'affichage de la page panier en fonction de si le panier est vide ou non ----- //

if (monPanier.length > 0) {
  document.getElementById('blocPanier').classList.add('display');
} else {
  document.getElementById('panierVide').classList.add('display2');
} // ----- Gestion de l'affichage du contenu du panier ----- //


for (var i in monPanier) {
  contenuPanierElt.innerHTML += "\n    <div class=\"monPanier__liste\">\n      <div class=\"liste__img\">\n        <img src=\"".concat(monPanier[i].imageUrl, "\" alt=\"\" class=\"liste__img--img\" />\n      </div>\n      <div class=\"liste__infosProduits\">\n        <p class=\"infosProduits__nom\">").concat(monPanier[i].name, "</p>\n        <p class=\"infosProduits__description\">").concat(monPanier[i].description, "</p>\n        <div class=\"infosProduits__bloc_prix\">\n          <p class=\"infosProduits__prix\">").concat(finalPrice(monPanier[i].price).toFixed(2), " \u20AC</p>\n          <button class=\"btn__supprimer\" onclick=\"removeProduct('").concat(monPanier[i]._id, "')\"><i class=\"fas fa-trash-alt picto__supprimer\"></i></button> \n        </div>\n      </div>\n    </div>");
} // ----- Calcul du montant total du panier ----- //


var prixTotalProduits = [];

for (var _i = 0; _i < monPanier.length; _i++) {
  var prixProduitPanier = monPanier[_i].price;
  prixTotalProduits.push(prixProduitPanier);
}

var reducer = function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
};

var prixTotal = prixTotalProduits.reduce(reducer, 0);
console.log(prixTotal); // ----- Affichage du bloc "Total" ----- //

var prixTotalPanier = document.getElementById("prixTotalPanier");
prixTotalPanier.innerHTML = "\n          <h2 class=\"total__h2\">Total</h2>\n          <div class=\"total__sousTotal\">\n            <p class=\"sousTotal__txt\">Sous-total :</p>\n            <p class=\"sousTotal__prix\">".concat(finalPrice(prixTotal).toFixed(2), " \u20AC</p>\n          </div>\n          <div class=\"total__fdl\">\n            <p class=\"fdl__txt\">Frais de livraison :</p>\n            <p class=\"fdl__prix\">Offerts</p>\n          </div>\n          <div class=\"total__total\">\n            <p class=\"total__txt\">Total :</p>\n            <p class=\"total__prix\" id=\"totalPrix\">").concat(finalPrice(prixTotal).toFixed(2), " \u20AC</p>\n          </div>\n          <a href=\"#formulaire\" class=\"lien__validationPanier\">\n            <button\n              type=\"button\"\n              class=\"col-12 btn btn-primary btn__validationPanier\"\n              id= \"btnValidationPanier\"\n            >\n              Valider ma commande\n            </button>\n          </a> "); // ------------------------------ GESTION DU FORMULAIRE ------------------------------ //
// ----- Affichage du formulaire ----- //

var btnValidationPanier = document.getElementById("btnValidationPanier");
var blocFormulaire = document.getElementById("blocFormulaire");
btnValidationPanier.addEventListener("click", function () {
  document.getElementById('blocFormulaire').classList.add('display3');
  blocFormulaire.innerHTML = "\n    <h2 class=\"formulaire__h2\" id=\"formulaire\">\n      Informations de livraison\n    </h2>\n    <form onsubmit=\"submitOrder(event)\" class=\"row g-3 formulaire__formulaire\">\n      <div class=\"col-md-6 formulaire__case\">\n        <label for=\"inputSecondName\" class=\"form-label\">Nom</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"inputSecondName\"\n          required\n        />\n      </div>\n      <div class=\"col-md-6 formulaire__case\">\n        <label for=\"inputFirstName\" class=\"form-label\">Pr\xE9nom</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"inputFirstName\"\n          required\n        />\n      </div>\n      <div class=\"col-md-6 formulaire__case\">\n        <label for=\"inputEmail\" class=\"form-label\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          id=\"inputEmail\"\n          placeholder=\"exemple@exemple.com\"\n          required\n        />\n      </div>\n      <div class=\"col-md-6 formulaire__case\">\n        <label for=\"inputTel\" class=\"form-label\">N\xB0 de t\xE9l\xE9phone</label>\n        <input\n          type=\"tel\"\n          class=\"form-control\"\n          id=\"inputTel\"\n          placeholder=\"ex : 06 12 04 12 06\"\n          required\n        />\n      </div>\n      <div class=\"col-12 formulaire__case\">\n        <label for=\"inputAddress\" class=\"form-label\">Addresse</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"inputAddress\"\n          placeholder=\"ex : 12 rue du paradis\"\n          required\n        />\n      </div>\n      <div class=\"col-md-6 formulaire__case\">\n        <label for=\"inputZip\" class=\"form-label\">Code Postal</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputZip\" />\n      </div>\n      <div class=\"col-md-6 formulaire__case\">\n        <label for=\"inputCity\" class=\"form-label\">Ville</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputCity\" required />\n      </div>\n      <div class=\"col-12 formulaire__case--btn\">\n        <input\n          type=\"submit\"\n          class=\"btn btn-primary formulaire__btn col-md-4\"\n          value=\"Envoyer\"\n          id=\"btn__formulaire\"\n          \n        />\n      </div>\n    </form>";
}); // ----- Récupération et envoi des données panier et formulaire vers le serveur ----- //

function submitOrder(e) {
  var orderData, option, response, data;
  return regeneratorRuntime.async(function submitOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          orderData = {
            contact: {
              firstName: document.getElementById("inputFirstName").value,
              lastName: document.getElementById("inputSecondName").value,
              address: document.getElementById("inputAddress").value,
              city: document.getElementById("inputCity").value,
              email: document.getElementById("inputEmail").value
            },
            products: monPanier
          };
          option = {
            method: "POST",
            body: JSON.stringify(orderData),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          };
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/teddies/order", option));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context.sent;
          console.log(data);
          document.getElementById('container').classList.add('display3');
          document.getElementById('container').innerHTML = "<p class=\"msg_confirmationCommande\"> Merci ".concat(data.contact.firstName, " ! <br> Le montant de votre commande s'\xE9l\xE8ve \xE0 ").concat(finalPrice(prixTotal).toFixed(2), "\u20AC. <br> Votre num\xE9ro de commande est ").concat(data.orderId, " </p>");
          localStorage.removeItem("listProducts");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}