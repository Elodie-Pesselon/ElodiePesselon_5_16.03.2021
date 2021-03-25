async function getTeddies( ) {
    let response = await fetch("http://localhost:3000/api/teddies");
    let data = await response.json();
    // console.log(data); 
    let main = document.getElementById("cardContainer");
    for (const teddy of data) {
        console.log(teddy);
        main.innerHTML += `
        <div class="col-12 col-lg-4">
          <div class="card">
            <img class="card-img-top" src="${teddy.imageUrl}" alt="" />
            <div class="card-body">
              <div class="card-title">
                <h5>${teddy.name}</h5>
              </div>
              <div class="card-text">
                <p>
                  ${teddy.description}
                </p>
              </div>
              <div>
                <a class="btn btn-dark" href="productPage.html?id=${teddy._id}" role="button"
                  >Découvrir cet ourson</a
                >
              </div>
            </div>
          </div>
        </div>
        `;
    }
}

getTeddies();