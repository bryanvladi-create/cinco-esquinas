import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'menu/:slug',
    loadComponent: () =>
      import('./pages/menu-detail/menu-detail.component').then(m => m.MenuDetailComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
