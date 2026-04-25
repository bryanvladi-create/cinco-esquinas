import { Component } from '@angular/core';
import { HeroComponent }      from '../../components/hero/hero.component';
import { ProofBarComponent }  from '../../components/proof-bar/proof-bar.component';
import { MenuComponent }      from '../../components/menu/menu.component';
import { ReviewsComponent }   from '../../components/reviews/reviews.component';
import { LocationComponent }  from '../../components/location/location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProofBarComponent,
    MenuComponent,
    ReviewsComponent,
    LocationComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-proof-bar></app-proof-bar>

    <div class="wave-divider" style="background:#fff">
      <svg viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0B2545" d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z"/>
      </svg>
    </div>

    <app-menu></app-menu>

    <div class="wave-divider" style="background:#fff">
      <svg viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0B2545" d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z"/>
      </svg>
    </div>

    <app-reviews></app-reviews>

    <div class="wave-divider" style="background:#0B2545">
      <svg viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F5F5F0" d="M0,28 C360,0 1080,55 1440,28 L1440,55 L0,55 Z"/>
      </svg>
    </div>

    <app-location></app-location>
  `,
  styles: [`
    .wave-divider { line-height: 0; overflow: hidden; margin-top: -1px; }
    .wave-divider svg { display: block; width: 100%; }
  `],
})
export class HomeComponent {}
