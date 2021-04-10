"use strict";

var contenuPanierElt = document.getElementById("contenuPanier");
var monPanier = getProducts();
console.log(monPanier); // Affichage du panier : 

for (var i in monPanier) {
  contenuPanierElt.innerHTML += "\n    <div class=\"monPanier__liste\">\n      <div class=\"liste__img\">\n        <img src=\"".concat(monPanier[i].imageUrl, "\" alt=\"\" class=\"liste__img--img\" />\n      </div>\n      <div class=\"liste__infosProduits\">\n        <p class=\"infosProduits__nom\">").concat(monPanier[i].name, "</p>\n        <p class=\"infosProduits__description\">").concat(monPanier[i].description, "</p>\n        <div class=\"infosProduits__bloc_prix\">\n          <p class=\"infosProduits__prix\">").concat(finalPrice(monPanier[i].price).toFixed(2), " \u20AC</p>\n          <button class=\"btn__supprimer\"><i class=\"fas fa-trash-alt picto__supprimer\"></i></button> \n        </div>\n      </div>\n    </div>");
} // Supprimer un article du panier 


var btn__remove = document.querySelectorAll(".btn__supprimer");

var _loop = function _loop(_i) {
  btn__remove[_i].addEventListener("click", function (e) {
    e.preventDefault();
    var id__productToRemove = monPanier[_i]._id;
    console.log(id__productToRemove);
    monPanier = monPanier.filter(function (element) {
      return element._id !== id__productToRemove;
    });
    localStorage.setItem("listProducts", JSON.stringify(monPanier));
    alert("Ce produit a bien été supprimé du panier");
    window.location.href = "./shoppingCart_page.html";
  });
};

for (var _i = 0; _i < btn__remove.length; _i++) {
  _loop(_i);
} //Stocker les saisies du formulaire dans le localStorage


var btnSubmit = document.getElementById("btn__formulaire");
btnSubmit.addEventListener("click", function () {
  localStorage.setItem("Nom", document.getElementById("inputSecondName").value); //console.log(document.getElementById("inputSecondName").value)

  localStorage.setItem("Prénom", document.getElementById("inputFirstName").value);
  localStorage.setItem("Email", document.getElementById("inputEmail").value);
  localStorage.setItem("Tel", document.getElementById("inputTel").value);
  localStorage.setItem("Adresse", document.getElementById("inputAddress").value);
  alert("Merci pour votre commande");
});