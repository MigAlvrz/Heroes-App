"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeleteDialogComponent = void 0;
var core_1 = require("@angular/core");
var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(router, heroesService) {
        var _this = this;
        this.router = router;
        this.heroesService = heroesService;
        this.deleteHero = function () {
            _this.heroesService.deleteHero(_this.selectedHero.id);
            _this.router.navigate(['/']);
        };
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
        this.selectedHero = this.heroesService.getSelectedHero();
    };
    DeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-dialog',
            templateUrl: './delete-dialog.component.html',
            styleUrls: ['./delete-dialog.component.css']
        })
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
exports.DeleteDialogComponent = DeleteDialogComponent;
