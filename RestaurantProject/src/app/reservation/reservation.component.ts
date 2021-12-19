import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import {guest} from '../guest.validator';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  guestModel= new guest();
  BookTable(bookForm:NgForm):void
  {
    alert("Your booking is Conformed");
console.log(bookForm.value);
 }
}


