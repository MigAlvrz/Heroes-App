import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  form: any;
  selectedHero: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private heroService: HeroesServiceService) {}

  ngOnInit(): void {
    this.selectedHero = this.heroService.getSelectedHero();
    this.form = this.formBuilder.group(
      {
        name: new FormControl(this.selectedHero ? this.selectedHero.name : '', [Validators.required]),
        alterEgo: new FormControl(this.selectedHero ? this.selectedHero.alterEgo : '', [Validators.required])
      }
    )

  }

  createNewHero = (name: string, alterEgo: string) => {
    if(name === undefined || alterEgo === undefined) return;

    if (this.selectedHero === undefined)
      this.heroService.saveHero(name, alterEgo);
    else
      this.heroService.updateHero(this.selectedHero.id, name, alterEgo);

      this.router.navigate(['/']);
  }



}
