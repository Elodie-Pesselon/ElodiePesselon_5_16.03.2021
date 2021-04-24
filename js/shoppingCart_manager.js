// ------------------------------ GESTION DE L'AJOUT, DE L'ENREGISTREMENT ET DE LA SUPPRESSION D'ÉLÉMENTS AU PANIER ------------------------------ //


// ---------- Ajout d'un produit au panier ---------- // 
function addToShoppingCart(product) {
    let listProducts = getProducts(); //récupérer le panier 
    listProducts.push(product); // ajout du produit
    saveProducts(listProducts); // sauvegarde du produit ajouté au panier 
}


// ---------- Affichage du panier ---------- // 
function getProducts() {
    let listProducts = localStorage.getItem("listProducts");
    if (listProducts == null) {
        return [];
    } else {
        return JSON.parse(listProducts);
    }
}


// ---------- Sauvegarde des articles ajoutés au panier ---------- //  
function saveProducts(listProducts) {
    let listProductsString = JSON.stringify(listProducts);
    localStorage.setItem("listProducts", listProductsString);
}



// ---------- Suppressions de tous les articles ajoutés au panier ---------- //
function removeAllProducts() {
    localStorage.removeItem("listProducts");
    window.location.href = "./shoppingCart_page.html";
}

// ---------- Suppression d'un seul produit dans le panier ---------- //

function removeProduct(productIdToRemove) {
    monPanier = monPanier.filter( element => element._id !== productIdToRemove);
    saveProducts(monPanier);
    alert("Ce produit a bien été supprimé du panier");
    window.location.href = "./shoppingCart_page.html";
}



