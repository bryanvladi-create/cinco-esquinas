import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p><strong>Encebollados Las 5 Esquinas</strong></p>
      <p>Tradición, sabor y sazón en el corazón de Quito.</p>
      <p class="sub">Pedro Collazos y Bartolomé Alves · Sur de Quito · Desde las 8:00 a.m.</p>
      <p class="copy">© {{ year }} Encebollados Las 5 Esquinas. Todos los derechos reservados.</p>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--marino);
      color: rgba(255,255,255,.65);
      text-align: center;
      padding: 2.5rem 1.5rem;
      font-size: .88rem;
      line-height: 1.8;
      strong { color: var(--naranja); }
      .sub  { margin-top: .4rem; font-size: .8rem; }
      .copy { margin-top: .8rem; font-size: .75rem; color: rgba(255,255,255,.35); }
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
