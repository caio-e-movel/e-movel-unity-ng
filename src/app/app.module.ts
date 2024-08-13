import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InitialComponent } from './initial/initial.component';
import { LocalComponent } from './local/local.component';
import { AreaComumComponent } from './area-comum/area-comum.component';
import { AptoComponent } from './apto/apto.component';
import { ProjectComponent } from './project/project.component';
import { InterestComponent } from './interest/interest.component';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';


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
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
