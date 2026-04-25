import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  mapUrl: SafeResourceUrl;

  readonly infoItems = [
    {
      icon: 'pin',
      title: 'Dirección',
      text: 'Pedro Collazos y Bartolomé Alves<br>Sur de Quito, Ecuador',
    },
    {
      icon: 'clock',
      title: 'Horario',
      text: 'Todos los días desde las <strong>8:00 a.m.</strong><br>Para empezar el día con fuerza 💪',
    },
    {
      icon: 'car',
      title: 'Facilidades',
      text: 'Estacionamiento disponible · Ambiente familiar<br>Fácil acceso desde el transporte público',
    },
  ];

  constructor(
    private sanitizer: DomSanitizer,
    public content: ContentService,
  ) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3990.0!2d-78.5491!3d-0.2500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPedro+Collazos+y+Bartolom%C3%A9+Alves%2C+Quito!5e0!3m2!1ses!2sec!4v1680000000000'
    );
  }
}
