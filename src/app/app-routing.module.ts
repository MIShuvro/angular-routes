import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

import { DatabaseComponent } from './components/database/database.component';
import { UserComponent } from './components/users/user/user.component';
import { DataEditComponent } from './components/database/data-edit/data-edit.component';
import { DataComponent } from './components/database/data/data.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    component: DatabaseComponent,
    children: [
      {
        path: ':id',
        component: DataComponent,
      },
      {
        path: ':id/edit',
        component: DataEditComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
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
