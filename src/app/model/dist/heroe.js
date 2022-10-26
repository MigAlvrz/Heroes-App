"use strict";
exports.__esModule = true;
exports.Heroe = void 0;
var Heroe = /** @class */ (function () {
    function Heroe(name, alterEgo) {
        this.name = '';
        this.alterEgo = '';
        this.id = Math.floor(Math.random() * Date.now());
        this.name = name;
        this.alterEgo = alterEgo;
    }
    return Heroe;
}());
exports.Heroe = Heroe;
