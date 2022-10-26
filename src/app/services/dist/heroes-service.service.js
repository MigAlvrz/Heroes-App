"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.HeroesServiceService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var heroe_1 = require("../model/heroe");
var HeroesServiceService = /** @class */ (function () {
    function HeroesServiceService() {
        var _this = this;
        this.heroes = [
            new heroe_1.Heroe("Daredevil", "Matt Murdock"),
            new heroe_1.Heroe("Spiderman", "Peter Parker"),
            new heroe_1.Heroe("Spiderwoman", "Jessica Drew"),
            new heroe_1.Heroe("Superman", "Clark Ken"),
            new heroe_1.Heroe("Cíclope", "Scott Summers"),
            new heroe_1.Heroe("Tormenta", "Ororo Iqadi"),
            new heroe_1.Heroe("Batman", "Bruce Wayne")
        ];
        this.isUpdated = new rxjs_1.Subject();
        this.getHeroes = function (query) {
            if (query !== undefined)
                return _this.heroes.filter(function (heroe) { return heroe.name.toLowerCase().includes(query.toLowerCase()); });
            else
                return _this.heroes;
        };
        this.getHeroById = function (id) {
            _this.selectedHero = _this.heroes.filter(function (heroe) { return heroe.id === parseInt(id); })[0];
            return _this.selectedHero;
        };
        this.selectHero = function (id) {
            _this.selectedHero = undefined;
            _this.selectedHero = id ? _this.heroes.filter(function (heroe) { return heroe.id === parseInt(id); })[0] : undefined;
            _this.sendUpdate(true);
        };
        this.getSelectedHero = function () {
            return _this.selectedHero;
        };
        this.saveHero = function (name, alterEgo) {
            _this.heroes = __spreadArrays([new heroe_1.Heroe(name, alterEgo)], _this.heroes);
            return _this.heroes.filter(function (hero) { return hero.id === hero.id; }).length > 0;
        };
        this.deleteHero = function (id) {
            _this.heroes = _this.heroes.filter(function (hero) { return hero.id !== id; });
            _this.sendUpdate(true);
            return _this.heroes.filter(function (hero) { return hero.id === id; }).length === 0;
        };
        this.updateHero = function (id, name, alterEgo) {
            var updatedHero = _this.heroes.filter(function (hero) { return hero.id === id; })[0];
            updatedHero.name = name;
            updatedHero.alterEgo = alterEgo;
            var index = _this.heroes.indexOf(updatedHero);
            _this.heroes[index] = updatedHero;
            return _this.heroes.filter(function (hero) { return hero.name === updatedHero.name; });
        };
        this.sendUpdate = function (isUpdated) {
            _this.isUpdated.next({ update: isUpdated });
        };
        this.getUpdate = function () {
            return _this.isUpdated.asObservable();
        };
    }
    HeroesServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HeroesServiceService);
    return HeroesServiceService;
}());
exports.HeroesServiceService = HeroesServiceService;
