import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AboutComponent } from '../pages/about/about.component';
import { HelpComponent } from '../pages/help/help.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { HomeComponent } from '../pages/home/home.component';
import { FaqComponent } from '../pages/faq/faq.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('../pages/about/about/about.module').then(m => m.AboutModule)
  // },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'help',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
