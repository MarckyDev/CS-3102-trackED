import { Routes} from '@angular/router';
import { SideMenuPage } from "./pages/side-menu/side-menu.page";
import { MainDashboard2Page } from './pages/main-dashboard2/main-dashboard2.page';
import { ToDoPage } from './pages/to-do/to-do.page';
import { NotificationsPage } from './pages/notifications/notifications.page';
import { NotesPage } from './pages/notes/notes.page';

export const routes: Routes = [

  {  //DO NOT CHANGE!
    path: '',
    loadComponent: () => import('./pages/side-menu/side-menu.page').then( m => m.SideMenuPage),
    children:[
      {
        path: 'main-dashboard2',
        loadComponent: () =>
          import('./pages/main-dashboard2/main-dashboard2.page').then((m) => m.MainDashboard2Page),
      },
      {
        path: 'notes',
        loadComponent: () => import('./pages/notes/notes.page').then( m => m.NotesPage)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./pages/notifications/notifications.page').then( m => m.NotificationsPage)
      },
      {
        path: 'to-do',
        loadComponent: () => import('./pages/to-do/to-do.page').then( m => m.ToDoPage)
      },

    ]
  },  //DO NOT CHANGE!
  
  
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)  //DO NOT CHANGE!
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)  //DO NOT CHANGE!
  },
];

/*
{
    path: 'side-menu',
    loadComponent: () => import('./pages/side-menu/side-menu.page').then( m => m.SideMenuPage)  //DO NOT CHANGE!
  },

  { //pupunta muna shang login kapag wala pang account
    path: '',
    redirectTo: 'main-dashboard2', //PWEDE TO PALITAN PERO PLS PAKIBALIK SA login, to see the side-menu please type in here main-dashboard2
    pathMatch: 'full',
  },
  { // kapag naka log in na dederetso sha dine //DO NOT CHANGE!
    path: 'side-menu',
    redirectTo: 'main-dashboard2',
    pathMatch: 'full',
  },

*/