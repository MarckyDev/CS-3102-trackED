import { Routes} from '@angular/router';
import { SideMenuPage } from "./pages/side-menu/side-menu.page";

export const routes: Routes = [

  {  //DO NOT CHANGE!
    path: 'main-dashboard2',
    component: SideMenuPage,
    children:[
      {
        path: 'main-dashboard2',
        loadChildren: () =>
          import('./pages/main-dashboard2/main-dashboard2.page').then((m) => m.MainDashboard2Page),
      },
      {
        path: 'notes',
        loadChildren: () => import('./pages/notes/notes.page').then( m => m.NotesPage)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./pages/notifications/notifications.page').then( m => m.NotificationsPage)
      },
      {
        path: 'to-do',
        loadChildren: () => import('./pages/to-do/to-do.page').then( m => m.ToDoPage)
      },

    ]
  },  //DO NOT CHANGE!
  { //pupunta muna shang login kapag wala pang account
    path: '',
    redirectTo: 'login', //PWEDE TO PALITAN PERO PLS PAKIBALIK SA login, to see the side-menu please type in here main-dashboard2
    pathMatch: 'full',
  },
  { // kapag naka log in na dederetso sha dine //DO NOT CHANGE!
    path: 'side-menu',
    redirectTo: 'main-dashboard2',
    pathMatch: 'full',
  },
  {
    path: 'side-menu',
    loadComponent: () => import('./pages/side-menu/side-menu.page').then( m => m.SideMenuPage)  //DO NOT CHANGE!
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)  //DO NOT CHANGE!
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)  //DO NOT CHANGE!
  },
];
