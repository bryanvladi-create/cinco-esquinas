import { Component, HostListener } from '@angular/core';
import { RouterOutlet }            from '@angular/router';
import { NavbarComponent }         from './components/navbar/navbar.component';
import { FooterComponent }         from './components/footer/footer.component';
import { FloatButtonsComponent }   from './components/float-buttons/float-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    FloatButtonsComponent,
  ],
  template: `
    <app-navbar [scrolled]="scrolled"></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-float-buttons></app-float-buttons>
  `,
})
export class AppComponent {
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }
}
