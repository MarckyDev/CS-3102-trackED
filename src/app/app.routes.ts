import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-dashboard2',
    pathMatch: 'full',
  },
  {
    path: 'main-dashboard2',
    loadComponent: () => import('./pages/main-dashboard2/main-dashboard2.page').then( m => m.MainDashboard2Page)
  },
  {
    path: 'main-dashboard2/:id',
    loadComponent: () => import('./pages/reminder-dashboard/reminder-dashboard.page').then( m => m.ReminderDashboardPage)
  },

];
