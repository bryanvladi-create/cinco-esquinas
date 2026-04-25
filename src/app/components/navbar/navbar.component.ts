import { Component, Input }          from '@angular/core';
import { CommonModule }               from '@angular/common';
import { Router, RouterLink }         from '@angular/router';
import { ContentService }             from '../../services/content.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() scrolled = false;
  menuOpen = false;

  readonly links = [
    { label: 'Menú',      anchor: 'menu' },
    { label: 'Reseñas',   anchor: 'resenas' },
    { label: 'Ubicación', anchor: 'ubicacion' },
  ];

  constructor(public content: ContentService, private router: Router) {}

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu()  { this.menuOpen = false; }

  /**
   * Si ya estamos en la home ( / ) hace scroll directo al anchor.
   * Si estamos en otra ruta navega a / y luego hace scroll.
   */
  navigateTo(anchor: string): void {
    this.closeMenu();
    const isHome = this.router.url === '/' || this.router.url === '';

    if (isHome) {
      this.scrollToAnchor(anchor);
    } else {
      this.router.navigate(['/']).then(() => {
        // Pequeño delay para que Angular renderice la home antes de hacer scroll
        setTimeout(() => this.scrollToAnchor(anchor), 80);
      });
    }
  }

  private scrollToAnchor(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
