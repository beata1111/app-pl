import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard, NoAuthGuard} from "./core/auth";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [NoAuthGuard],

    loadChildren: () =>
      import('./views/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/main/main.module').then(
        (m) => m.MainModule
      ),
  },
  {
    path: 'challenge/:category/:level/:variant',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/challenge/challenge.module').then(
        (m) => m.ChallengeModule
      ),
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
