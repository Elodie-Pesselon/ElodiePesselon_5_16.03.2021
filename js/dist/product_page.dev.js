"use strict";

var searchParam = new URLSearchParams(window.location.search);
var teddyId = searchParam.get("id");
var data = null;

function getTeddyId() {
  var response, btn_addToCart;
  return regeneratorRuntime.async(function getTeddyId$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/teddies/" + teddyId));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);
          main.innerHTML += "\n                    <div class=\"row container_product\" id=\"container__product\">\n                        <div class=\"col-5 bloc_img\">\n                            <img src=\"".concat(data.imageUrl, "\" class=\"bloc_img-img\"  />\n                        </div>\n                        <div class=\"col-7 bloc_txt\">\n                            <h1>").concat(data.name, "</h1>\n                            <p class=\"bloc_txt-description\">").concat(data.description, "</p>\n                        <div class=\"bloc_txt-select\">\n                            <p class=\"select-txt\">S\xE9lectionnez votre mod\xE8le :</p>\n                            <select name=\"model\" id=\"selectColor\" class=\"select-text-select\">\n                             ").concat(colorOptions(data.colors), "\n                            </select>\n                        </div>\n                        <div class=\"bloc_price\">\n                            <p class=\"bloc_txt-price\">").concat(finalPrice(data.price).toFixed(2), " \u20AC</p>\n                            <a\n                                class=\"btn btn-dark bloc_txt-addToShoppingCart\"\n                                href=\"./shoppingCart.html\"\n                                role=\"button\"\n                                data-id=").concat(data._id, "\n                                id=\"btn_addToCart\"\n                            >\n                                Ajoutez au panier\n                                <svg\n                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                    width=\"18\"\n                                    height=\"18\"\n                                    fill=\"currentColor\"\n                                    class=\"bi bi-bag addToShoppintgCart-panier\"\n                                    viewBox=\"0 0 18 18\"\n                                >\n                                    <path\n                                        d=\"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z\"\n                                    />\n                                </svg>\n                            </a>\n                        </div>\n                    </div>\n                </div>");
          btn_addToCart = document.getElementById("btn_addToCart");
          btn_addToCart.addEventListener("click", function (event) {
            event.preventDefault();
            addToShoppingCart(data);
            alert("Ce produit a bien été ajouté au panier !");
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

getTeddyId();

function colorOptions(colors) {
  var colorList = "";

  for (var i in colors) {
    console.log(colors[i]); //colorList += '<option value="' + colors[i] + '" >' + colors[i] + '</option>';

    colorList += "<option value=\"".concat(colors[i], "\" > ").concat(colors[i], " </option>");
  }

  return colorList;
}