import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';

import { DatabaseComponent } from './components/database/database.component';
import { DataComponent } from './components/database/data/data.component';
import { DataEditComponent } from './components/database/data-edit/data-edit.component';

import { ServersService } from './components/database/servers.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    DatabaseComponent,
    DataComponent,
    DataEditComponent,
    NotFoundComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
