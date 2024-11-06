import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { 
  NgFor, 
  UpperCasePipe 
} from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule, 
    NgFor,  
    UpperCasePipe,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
