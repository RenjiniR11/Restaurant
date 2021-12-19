import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MenuComponent,
    AboutComponent,
    EventComponent,
    ContactComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{path:'',component:ReservationComponent},
  {path:'app-reservation',component:ReservationComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
