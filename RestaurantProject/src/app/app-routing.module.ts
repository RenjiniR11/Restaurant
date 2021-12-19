import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [

    { path:'home',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'about',component:AboutComponent},
    {path:'event',component:EventComponent},
    {path:'contact',component:ContactComponent},
    {path:'reservation',component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
