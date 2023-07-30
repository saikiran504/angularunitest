import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent  {
  
  public buscapacity =50;
  public peopleCount =20;

  reserveSeat():boolean{
    let seatReserved =false;
    if(this.peopleCount <= this.buscapacity){
      this.peopleCount++;
      seatReserved = true;
    }
    return seatReserved;
  }
  
}

