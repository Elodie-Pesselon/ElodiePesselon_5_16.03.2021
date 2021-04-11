let contenuPanierElt = document.getElementById("contenuPanier");

let monPanier = getProducts();

//console.log(monPanier);


// Affichage du panier : 

for (let i in monPanier) {
    contenuPanierElt.innerHTML += `
    <div class="monPanier__liste">
      <div class="liste__img">
        <img src="${monPanier[i].imageUrl}" alt="" class="liste__img--img" />
      </div>
      <div class="liste__infosProduits">
        <p class="infosProduits__nom">${monPanier[i].name}</p>
        <p class="infosProduits__description">${monPanier[i].description}</p>
        <div class="infosProduits__bloc_prix">
          <p class="infosProduits__prix">${finalPrice(monPanier[i].price).toFixed(2)} €</p>
          <button class="btn__supprimer"><i class="fas fa-trash-alt picto__supprimer"></i></button> 
        </div>
      </div>
    </div>`
}


// Supprimer un article du panier 

let btn__remove = document.querySelectorAll(".btn__supprimer");

for (let i = 0; i < btn__remove.length; i++){
  btn__remove[i].addEventListener("click", (e) =>{
    e.preventDefault();
    let id__productToRemove = monPanier[i]._id;
    console.log(id__productToRemove);
    monPanier = monPanier.filter( element => element._id !== id__productToRemove);
    localStorage.setItem("listProducts", JSON.stringify(monPanier));
    alert("Ce produit a bien été supprimé du panier");
    window.location.href = "./shoppingCart_page.html";
  })
}


// Calculer le montant total du panier 

let prixTotalProduits = [];

for (let i = 0; i < monPanier.length; i++){
  let prixProduitPanier = monPanier[i].price;
  prixTotalProduits.push(prixProduitPanier);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue; 
const prixTotal = prixTotalProduits.reduce(reducer,0);

console.log(prixTotal);

// Affichage du prix total en html : 

let prixTotalPanier = document.getElementById("prixTotalPanier")

prixTotalPanier.innerHTML = `
          <h2 class="total__h2">Total</h2>
          <div class="total__sousTotal">
            <p class="sousTotal__txt">Sous-total :</p>
            <p class="sousTotal__prix">${finalPrice(prixTotal).toFixed(2)} €</p>
          </div>
          <div class="total__fdl">
            <p class="fdl__txt">Frais de livraison :</p>
            <p class="fdl__prix">Offerts</p>
          </div>
          <div class="total__total">
            <p class="total__txt">Total :</p>
            <p class="total__prix">${finalPrice(prixTotal).toFixed(2)} €</p>
          </div>
          <a href="#formulaire" class="lien__validationPanier">
            <button
              type="button"
              class="col-12 btn btn-primary btn__validationPanier"
            >
              Valider ma commande
            </button>
          </a>
`



//Stocker les saisies du formulaire dans le localStorage

let btnSubmit = document.getElementById("btn__formulaire");

btnSubmit.addEventListener("click", () => {
    localStorage.setItem("Nom", document.getElementById("inputSecondName").value);
    //console.log(document.getElementById("inputSecondName").value)
    localStorage.setItem("Prénom", document.getElementById("inputFirstName").value);
    localStorage.setItem("Email", document.getElementById("inputEmail").value);
    localStorage.setItem("Tel", document.getElementById("inputTel").value);
    localStorage.setItem("Adresse", document.getElementById("inputAddress").value);

    alert("Merci pour votre commande");
});


