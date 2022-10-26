"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var heroes_list_component_1 = require("./components/heroes-list/heroes-list.component");
var heroes_detail_component_1 = require("./components/heroes-detail/heroes-detail.component");
var home_component_1 = require("./components/home/home.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var toolbar_1 = require("@angular/material/toolbar");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var forms_1 = require("@angular/forms");
var new_hero_component_1 = require("./components/new-hero/new-hero.component");
var delete_dialog_component_1 = require("./components/delete-dialog/delete-dialog.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                heroes_list_component_1.HeroesListComponent,
                heroes_detail_component_1.HeroesDetailComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                new_hero_component_1.NewHeroComponent,
                delete_dialog_component_1.DeleteDialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                toolbar_1.MatToolbarModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
                paginator_1.MatPaginatorModule,
                table_1.MatTableModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
