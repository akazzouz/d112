import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardPageComponent
  }
];
