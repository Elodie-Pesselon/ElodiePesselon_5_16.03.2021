"use strict";

function getTeddyId() {
  var response, data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, teddyId;

  return regeneratorRuntime.async(function getTeddyId$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/api/teddies"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 9;

          for (_iterator = data[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            teddyId = _step.value;
            main.innerHTML += "\n        <div class=\"row container_product\" id=\"container__product\">\n            <div class=\"col-5 bloc_img\">\n                <img src=\"".concat(teddyId.imageUrl, "\" class=\"bloc_img-img\"  />\n            </div>\n            <div class=\"col-7 bloc_txt\">\n                <h1>").concat(teddyId.name, "</h1>\n                <p class=\"bloc_txt-description\">").concat(teddyId.description, "</p>\n            <div class=\"bloc_txt-select\">\n                <p class=\"select-txt\">S\xE9lectionnez votre mod\xE8le :</p>\n                <select name=\"model\" id=\"\" class=\"select-text-select\">\n                    <option value=\"\">").concat(teddyId.colors[0], "</option>\n                    <option value=\"\">").concat(teddyId.colors[1], "</option>\n                    <option value=\"\">").concat(teddyId.colors[2], "</option>\n                    <option value=\"\">").concat(teddyId.colors[3], "</option>\n                </select>\n            </div>\n            <p class=\"bloc_txt-price\">").concat(teddyId.price, " \u20AC</p>\n            <a\n                class=\"btn btn-dark bloc_txt-addToShoppingCart\"\n                href=\"./shoppingCart.html\"\n                role=\"button\"\n            >\n                Ajoutez au panier\n                 <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"18\"\n                    height=\"18\"\n                    fill=\"currentColor\"\n                    class=\"bi bi-bag addToShoppintgCart-panier\"\n                    viewBox=\"0 0 18 18\"\n                >\n                    <path\n                        d=\"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z\"\n                    />\n                </svg>\n            </a>\n        </div>\n      </div>");
          }

          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](9);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 17:
          _context.prev = 17;
          _context.prev = 18;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 20:
          _context.prev = 20;

          if (!_didIteratorError) {
            _context.next = 23;
            break;
          }

          throw _iteratorError;

        case 23:
          return _context.finish(20);

        case 24:
          return _context.finish(17);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 13, 17, 25], [18,, 20, 24]]);
}

getTeddyId();