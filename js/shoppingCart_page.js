// ------------------------------ DÉCLARATION DES VARIABLES ------------------------------ //

let contenuPanierElt = document.getElementById("contenuPanier");

let monPanier = getProducts();



// ------------------------------ AFFICHAGE DU BLOC PANIER ------------------------------ //


// ----- Gestion de l'affichage de la page panier en fonction de si le panier est vide ou non ----- //

if (monPanier.length > 0){
    document.getElementById('blocPanier').classList.add('display');
} else{
  document.getElementById('panierVide').classList.add('display2');
}


// ----- Gestion de l'affichage du contenu du panier ----- //

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
          <button class="btn__supprimer" onclick="removeProduct('${monPanier[i]._id}')"><i class="fas fa-trash-alt picto__supprimer"></i></button> 
        </div>
      </div>
    </div>`
}


// ----- Calcul du montant total du panier ----- //

let prixTotalProduits = [];

for (let i = 0; i < monPanier.length; i++){
  let prixProduitPanier = monPanier[i].price;
  prixTotalProduits.push(prixProduitPanier);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue; 
const prixTotal = prixTotalProduits.reduce(reducer,0);

console.log(prixTotal);


// ----- Affichage du bloc "Total" ----- //


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
              id= "btnValidationPanier"
            >
              Valider ma commande
            </button>
          </a> `


// ------------------------------ GESTION DU FORMULAIRE ------------------------------ //

// ----- Affichage du formulaire ----- //

let btnValidationPanier = document.getElementById("btnValidationPanier");
let blocFormulaire = document.getElementById("blocFormulaire");

btnValidationPanier.addEventListener("click",() => {
  document.getElementById('blocFormulaire').classList.add('display3');
  blocFormulaire.innerHTML = `
    <h2 class="formulaire__h2" id="formulaire">
      Informations de livraison
    </h2>
    <form onsubmit="submitOrder(event)" class="row g-3 formulaire__formulaire">
      <div class="col-md-6 formulaire__case">
        <label for="inputSecondName" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="inputSecondName"
          required
        />
      </div>
      <div class="col-md-6 formulaire__case">
        <label for="inputFirstName" class="form-label">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="inputFirstName"
          required
        />
      </div>
      <div class="col-md-6 formulaire__case">
        <label for="inputEmail" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="exemple@exemple.com"
          required
        />
      </div>
      <div class="col-md-6 formulaire__case">
        <label for="inputTel" class="form-label">N° de téléphone</label>
        <input
          type="tel"
          class="form-control"
          id="inputTel"
          placeholder="ex : 06 12 04 12 06"
          required
        />
      </div>
      <div class="col-12 formulaire__case">
        <label for="inputAddress" class="form-label">Addresse</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="ex : 12 rue du paradis"
          required
        />
      </div>
      <div class="col-md-6 formulaire__case">
        <label for="inputZip" class="form-label">Code Postal</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>
      <div class="col-md-6 formulaire__case">
        <label for="inputCity" class="form-label">Ville</label>
        <input type="text" class="form-control" id="inputCity" required />
      </div>
      <div class="col-12 formulaire__case--btn">
        <input
          type="submit"
          class="btn btn-primary formulaire__btn col-md-4"
          value="Envoyer"
          id="btn__formulaire"
          
        />
      </div>
    </form>`;
});


// ----- Récupération et envoi des données panier et formulaire vers le serveur ----- //


async function submitOrder(e) {
  e.preventDefault();
  var orderData = {
    contact: {
          firstName: document.getElementById("inputFirstName").value,
          lastName: document.getElementById("inputSecondName").value,
          address: document.getElementById("inputAddress").value,
          city: document.getElementById("inputCity").value,
          email: document.getElementById("inputEmail").value,
      },
      products: monPanier,
    };

  var option = {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      }

  };
  let response = await fetch("http://localhost:3000/api/teddies/order",option);
  let data = await response.json();
  console.log(data);
  document.getElementById('container').classList.add('display3');
  document.getElementById('container').innerHTML = `<p class="msg_confirmationCommande"> Merci ${data.contact.firstName}, votre numéro de commande est ${data.orderId} </p>`;
  localStorage.removeItem("listProducts");
}






