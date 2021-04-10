let contenuPanierElt = document.getElementById("contenuPanier");

let monPanier = getProducts();

console.log(monPanier);


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


