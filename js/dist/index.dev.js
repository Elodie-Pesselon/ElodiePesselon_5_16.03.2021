"use strict";

function getTeddies() {
  var response, data, main, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, teddy;

  return regeneratorRuntime.async(function getTeddies$(_context) {
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
          // console.log(data); 
          main = document.getElementById("cardContainer");
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 10;

          for (_iterator = data[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            teddy = _step.value;
            console.log(teddy);
            main.innerHTML += "\n        <div class=\"col-12 col-lg-4\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"".concat(teddy.imageUrl, "\" alt=\"\" />\n            <div class=\"card-body\">\n              <div class=\"card-title\">\n                <h5>").concat(teddy.name, "</h5>\n              </div>\n              <div class=\"card-text\">\n                <p>\n                  ").concat(teddy.description, "\n                </p>\n              </div>\n              <div>\n                <a class=\"btn btn-dark\" href=\"page_produit.html\" role=\"button\"\n                  >D\xE9couvrir cet ourson</a\n                >\n              </div>\n            </div>\n          </div>\n        </div>\n        ");
          }

          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](10);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 14, 18, 26], [19,, 21, 25]]);
}

getTeddies();