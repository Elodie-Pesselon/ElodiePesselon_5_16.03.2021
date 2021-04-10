"use strict";

var contenuPanierElt = document.getElementById("contenuPanier");
var monPanier = getProducts();

for (var i in monPanier) {
  contenuPanierElt.innerHTML += "\n    <div class=\"monPanier__liste\">\n    <div class=\"liste__img\">\n      <img src=\"".concat(monPanier[i].imageUrl, "\" alt=\"\" class=\"liste__img--img\" />\n    </div>\n    <div class=\"liste__infosProduits\">\n      <p class=\"infosProduits__prix\">").concat(finalPrice(monPanier[i].price).toFixed(2), " \u20AC</p>\n      <p class=\"infosProduits__nom\">").concat(monPanier[i].name, "</p>\n      <button  onclick=\"removeProducts()\" type=\"button\" id=\"btn__supprimerDuPanier\" data-id=").concat(monPanier[i].id, "> Supprimer du panier </button>\n      </div>\n    </div>\n  </div>");
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
/*function supprimerElmt() {

    contenuPanierElt.innerHTML = '';
}*/