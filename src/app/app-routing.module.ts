import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'new', component: NewHeroComponent},
  {path: 'update/:hero', component: NewHeroComponent},
  {path: ':id', component: HeroesDetailComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
