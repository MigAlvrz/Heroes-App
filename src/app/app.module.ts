import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {  MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesDetailComponent,
    HomeComponent,
    NavbarComponent,
    NewHeroComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
