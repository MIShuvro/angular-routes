import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

import { DatabaseComponent } from './components/database/database.component';
import { UserComponent } from './components/users/user/user.component';
import { DataEditComponent } from './components/database/data-edit/data-edit.component';
import { DataComponent } from './components/database/data/data.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/**
 * Auth Guard start
 */

import { AuthGuard } from './api-service/auth-guard.service';
import { CheckAdmin } from './api-service/authGuard-checkAdmin.service';

import { CanDeactivateGuard } from './components/database/data-edit/can-deactivate-guard.service';

/**
 *  Auth Guard end
 */

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },

  {
    path: 'database',
    canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    component: DatabaseComponent,
    children: [
      {
        path: ':id',

        component: DataComponent,
      },
      {
        path: ':id/edit',
        // canActivate: [AuthGuard],
        component: DataEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { message: 'Page Not Found' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
