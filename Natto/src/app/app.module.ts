import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InitialComponent } from './initial/initial.component';
import { LocalComponent } from './local/local.component';
import { AreaComumComponent } from './area-comum/area-comum.component';
import { AptoComponent } from './apto/apto.component';
import { ProjectComponent } from './project/project.component';
import { InterestComponent } from './interest/interest.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InitialComponent,
    LocalComponent,
    AreaComumComponent,
    AptoComponent,
    ProjectComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
