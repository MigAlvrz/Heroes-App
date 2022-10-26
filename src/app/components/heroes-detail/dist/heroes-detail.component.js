"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroesDetailComponent = void 0;
var core_1 = require("@angular/core");
var delete_dialog_component_1 = require("../delete-dialog/delete-dialog.component");
var HeroesDetailComponent = /** @class */ (function () {
    function HeroesDetailComponent(router, dialog, HeroesService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.HeroesService = HeroesService;
        this.onDeleteHero = function () {
            _this.dialog.open(delete_dialog_component_1.DeleteDialogComponent);
        };
        this.onModifyHero = function () {
            _this.router.navigate(["/update/" + _this.selectedHero.id]);
        };
        this.removeSelectedHero = function () {
            _this.selectedHero = undefined;
            _this.HeroesService.selectHero();
        };
    }
    HeroesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedHero = this.HeroesService.getSelectedHero();
        this.sub = this.HeroesService.getUpdate().subscribe(function (update) {
            _this.selectedHero = _this.HeroesService.getSelectedHero();
        });
    };
    HeroesDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeroesDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-heroes-detail',
            templateUrl: './heroes-detail.component.html',
            styleUrls: ['./heroes-detail.component.css']
        })
    ], HeroesDetailComponent);
    return HeroesDetailComponent;
}());
exports.HeroesDetailComponent = HeroesDetailComponent;
