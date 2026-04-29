import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
   {
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'thanks',
    loadComponent: () => import('./thanks/thanks.page').then( m => m.ThanksPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'support',
    loadComponent: () => import('./support/support.page').then( m => m.SupportPage)
  },
  {
    path: 'viewbook',
    loadComponent: () => import('./viewbook/viewbook.page').then( m => m.ViewbookPage)
  },
  {
    path: 'event',
    loadComponent: () => import('./event/event.page').then( m => m.EventPage)
  },
  {
    path: 'viewevents',
    loadComponent: () => import('./viewevents/viewevents.page').then( m => m.VieweventsPage)
  },
 
];
