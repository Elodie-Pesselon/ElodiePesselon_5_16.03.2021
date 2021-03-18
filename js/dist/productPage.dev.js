"use strict";

function getTeddies() {
  var response, data;
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

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}