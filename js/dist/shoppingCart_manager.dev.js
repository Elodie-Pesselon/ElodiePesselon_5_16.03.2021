"use strict";

// Ajout au panier
function addToShoppingCart(product) {
  var listProducts = getProducts(); //récupérer le panier 

  listProducts.push(product); // ajout du produit

  saveProducts(listProducts); // sauvegarde du produit ajouté au panier 
} // lire mon panier 


function getProducts() {
  var listProducts = localStorage.getItem("listProducts");

  if (listProducts == null) {
    return [];
  } else {
    return JSON.parse(listProducts);
  }
} //Sauvegarder mon panier 


function saveProducts(listProducts) {
  var listProductsString = JSON.stringify(listProducts);
  localStorage.setItem("listProducts", listProductsString);
} //Suppimer un élément du panier 


function removeProducts() {
  var listProducts = getProducts(); //listProducts = listProducts.filter()

  localStorage.removeItem(listProducts);
} //Supprimer tous les articles du panier


function removeAllProducts() {
  var listProducts = getProducts();
  localStorage.clear(listProducts);
  window.location.href = "./shoppingCart_page.html"; //contenuPanierElt.innerHTML += "Votre panier est vide";

  var btn__viderPanier = document.getElementById("btn_viderPanier"); //btn__viderPanier.innerHTML += "Votre panier est vide";
}