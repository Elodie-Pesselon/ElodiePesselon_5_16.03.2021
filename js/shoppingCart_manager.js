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



//Supprimer tous les articles du panier
function removeAllProducts() {
    localStorage.removeItem("listProducts");
    window.location.href = "./shoppingCart_page.html";
    let btn__viderPanier = document.getElementById("btn_viderPanier");
}

//Supprimer un seul produit 

function removeProduct(productIdToRemove) {
    monPanier = monPanier.filter( element => element._id !== productIdToRemove);
    saveProducts(monPanier);
    alert("Ce produit a bien été supprimé du panier");
    window.location.href = "./shoppingCart_page.html";
}



