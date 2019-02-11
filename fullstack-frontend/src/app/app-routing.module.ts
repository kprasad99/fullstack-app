import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  pathMatch: 'prefix',
  loadChildren: './home/home.module#HomeModule',
  canLoad: [AuthGuard]
}, {
  path: 'auth',
  pathMatch: 'prefix',
  loadChildren: './auth/auth.module#AuthModule',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
