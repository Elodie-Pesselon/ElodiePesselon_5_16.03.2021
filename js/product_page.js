// ------------------------------ GÉNÉRATION AUTOMATIQUE DE LA PAGE PRODUIT ------------------------------//


// ---------- Récupération des informations correspondantes au produit sélectionné en fonction de son ID --------- //

let searchParam = new URLSearchParams(window.location.search);
let teddyId = searchParam.get("id");
let data = null;

// ---------- Création d'une fonction permettant de générer la page produit automatiquement --------- // 

async function getTeddyId() {
    let response = await fetch("http://localhost:3000/api/teddies/" + teddyId);
    data = await response.json();
    console.log(data);
    main.innerHTML += `
                    <div class="row container_product" id="container__product">
                        <div class="col-5 bloc_img">
                            <img src="${data.imageUrl}" class="bloc_img-img"  />
                        </div>
                        <div class="col-7 bloc_txt">
                            <h1>${data.name}</h1>
                            <p class="bloc_txt-description">${data.description}</p>
                        <div class="bloc_txt-select">
                            <p class="select-txt">Sélectionnez votre modèle :</p>
                            <select name="model" id="selectColor" class="select-text-select">
                             ${colorOptions(data.colors)}
                            </select>
                        </div>
                        <div class="bloc_price">
                            <p class="bloc_txt-price">${finalPrice(data.price).toFixed(2)} €</p>
                            <a
                                class="btn btn-dark bloc_txt-addToShoppingCart"
                                href="./shoppingCart.html"
                                role="button"
                                data-id=${data._id}
                                id="btn_addToCart"
                            >
                                Ajoutez au panier
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    class="bi bi-bag addToShoppintgCart-panier"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>`;
    // Création d'une alerte pour confirmer à l'utilisateur l'ajout du produit au panier 
    let btn_addToCart = document.getElementById("btn_addToCart");
    btn_addToCart.addEventListener("click", (event) => {
        event.preventDefault();
        addToShoppingCart(data);
        alert("Ce produit a bien été ajouté au panier !")
    })
}

getTeddyId();

// Création d'une fonction permettant de générer la liste des couleurs disponibles en fonction de l'ID
 
function colorOptions(colors) {
    let colorList = "";
    for (let i in colors) {
        console.log(colors[i]);
        colorList += `<option value="${colors[i]}" > ${colors[i]} </option>`;
    }
    return colorList;
}