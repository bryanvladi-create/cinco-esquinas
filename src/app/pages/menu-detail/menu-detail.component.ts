import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { MenuItem } from '../../models/index';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss'],
})
export class MenuDetailComponent implements OnInit {
  item: MenuItem | undefined;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public content: ContentService,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.item = this.content.getItemBySlug(slug);
    if (!this.item) this.notFound = true;
  }

  goBack(): void {
    this.router.navigate(['/'], { fragment: 'menu' });
  }
}
