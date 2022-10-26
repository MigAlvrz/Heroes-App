"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewHeroComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var NewHeroComponent = /** @class */ (function () {
    function NewHeroComponent(formBuilder, router, heroService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.heroService = heroService;
        this.createNewHero = function (name, alterEgo) {
            if (name === undefined || alterEgo === undefined)
                return;
            if (_this.selectedHero === undefined)
                _this.heroService.saveHero(name, alterEgo);
            else
                _this.heroService.updateHero(_this.selectedHero.id, name, alterEgo);
            _this.router.navigate(['/']);
        };
    }
    NewHeroComponent.prototype.ngOnInit = function () {
        this.selectedHero = this.heroService.getSelectedHero();
        this.form = this.formBuilder.group({
            name: new forms_1.FormControl(this.selectedHero ? this.selectedHero.name : '', [forms_1.Validators.required]),
            alterEgo: new forms_1.FormControl(this.selectedHero ? this.selectedHero.alterEgo : '', [forms_1.Validators.required])
        });
    };
    NewHeroComponent = __decorate([
        core_1.Component({
            selector: 'app-new-hero',
            templateUrl: './new-hero.component.html',
            styleUrls: ['./new-hero.component.css']
        })
    ], NewHeroComponent);
    return NewHeroComponent;
}());
exports.NewHeroComponent = NewHeroComponent;
