import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { MenuItem } from '../../models/index';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    public content: ContentService,
    private router: Router,
  ) {}

  navigateTo(item: MenuItem): void {
    this.router.navigate(['/menu', item.slug]);
  }
}
