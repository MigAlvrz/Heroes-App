import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/model/heroe';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  selectedHero: any;
  private sub: any;

  constructor(public router: Router, public dialog: MatDialog, public HeroesService: HeroesServiceService) { }

  ngOnInit(): void {
    this.selectedHero = this.HeroesService.getSelectedHero();
    this.sub = this.HeroesService.getUpdate().subscribe(update => {
      this.selectedHero = this.HeroesService.getSelectedHero();
    })
  }

  onDeleteHero = () => {
    this.dialog.open(DeleteDialogComponent);
  }

  onModifyHero = () => {
    this.router.navigate([`/update/${this.selectedHero.id}`]);
  }

  removeSelectedHero = () => {
    this.selectedHero = undefined;
    this.HeroesService.selectHero();
  }

}
