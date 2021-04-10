// Ajout au panier
function addToShoppingCart(product) {
    let listProducts = getProducts(); //récupérer le panier 
    listProducts.push(product); // ajout du produit
    saveProducts(listProducts); // sauvegarde du produit ajouté au panier 
}


// lire mon panier 
function getProducts() {
    let listProducts = localStorage.getItem("listProducts");
    if (listProducts == null) {
        return [];
    } else {
        return JSON.parse(listProducts);
    }
}


//Sauvegarder mon panier 
function saveProducts(listProducts) {
    let listProductsString = JSON.stringify(listProducts);
    localStorage.setItem("listProducts", listProductsString);
}


//Suppimer un élément du panier 
function removeProducts() {
    let listProducts = getProducts();
    //listProducts = listProducts.filter()
    localStorage.removeItem(listProducts);
}

//Supprimer tous les articles du panier
function removeAllProducts() {
    let listProducts = getProducts();
    localStorage.clear(listProducts);
    window.location.href = "./shoppingCart_page.html";
    //contenuPanierElt.innerHTML += "Votre panier est vide";
    let btn__viderPanier = document.getElementById("btn_viderPanier");
   //btn__viderPanier.innerHTML += "Votre panier est vide";

}





