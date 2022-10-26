import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesServiceService } from '../../services/heroes-service.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  selectedHero: any;
  constructor(public router: Router, public heroesService: HeroesServiceService, ) { }

  ngOnInit(): void {
    this.selectedHero = this.heroesService.getSelectedHero();
  }
  deleteHero = () => {
    this.heroesService.deleteHero(this.selectedHero.id);
    this.router.navigate(['/']);
  }

}
