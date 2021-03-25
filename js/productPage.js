async function getTeddyId() {
    let response = await fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243");
    let data = await response.json();
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
                <select name="model" id="" class="select-text-select">
                    <option value="">${data.colors[0]}</option>
                    <option value="">${data.colors[1]}</option>
                    <option value="">${data.colors[2]}</option>
                    <option value="">${data.colors[3]}</option>
                </select>
            </div>
            <p class="bloc_txt-price">${data.price} €</p>
            <a
                class="btn btn-dark bloc_txt-addToShoppingCart"
                href="./shoppingCart.html"
                role="button"
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
      </div>`
    
}
getTeddyId()