import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MenuComponent,
    AboutComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
