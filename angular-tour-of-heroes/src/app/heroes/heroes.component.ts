import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { 
  NgFor, 
  NgIf,
  UpperCasePipe 
} from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule, 
    NgFor, 
    NgIf, 
    UpperCasePipe
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
