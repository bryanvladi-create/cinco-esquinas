import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-float-buttons',
  standalone: true,
  templateUrl: './float-buttons.component.html',
  styleUrls: ['./float-buttons.component.scss'],
})
export class FloatButtonsComponent {
  constructor(public content: ContentService) {}
}
