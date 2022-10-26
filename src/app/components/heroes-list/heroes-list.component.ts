import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Heroe } from 'src/app/model/heroe';
import { HeroesServiceService } from '../../services/heroes-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})


export class HeroesListComponent implements OnInit {

  query: FormControl = new FormControl();
  Columns = ['name', 'alterEgo']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Heroe>;
  private listSub: any;

  constructor(public router: Router, public dialog: MatDialog, public HeroesService: HeroesServiceService) {
    this.dataSource = new MatTableDataSource(this.HeroesService.getHeroes());
  }

  ngOnInit(): void {
    this.HeroesService.selectHero();
    this.listSub = this.HeroesService.getUpdate().subscribe(() => {
      this.dataSource.data = this.HeroesService.getHeroes()
    })
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.listSub.unsubscribe();
  }

  selectHeroe = async (name: string) => {
    this.HeroesService.selectHero(name);
    this.router.navigate([`/${name}`]);
  }

  deleteHero = (id: string) => {
    this.HeroesService.selectHero(id)
    this.dialog.open(DeleteDialogComponent);
  }

  modifyHero = (id: string) => {
    this.HeroesService.selectHero(id)
    this.router.navigate([`/update/${id}`]);
  }

  onFilter = () => {
    this.dataSource.filter = this.query.value;
  }

}


