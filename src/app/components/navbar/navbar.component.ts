import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  query: FormControl = new FormControl();

  constructor(public router: Router, public heroService: HeroesService) { }

  ngOnInit(): void {
  }

  onSearchHero = (id: string) => {
    this.heroService.selectHero(id);
    this.router.navigate([`/${id}`])

  }

}
