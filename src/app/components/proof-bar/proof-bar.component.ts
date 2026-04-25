import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-proof-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proof-bar.component.html',
  styleUrls: ['./proof-bar.component.scss'],
})
export class ProofBarComponent {
  constructor(public content: ContentService) {}
}
