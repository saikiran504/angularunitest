import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReservationComponent } from './ticket-reservation.component';

describe('TicketReservationComponent', () => {
  let component: TicketReservationComponent;
  let fixture: ComponentFixture<TicketReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketReservationComponent]
    });
    fixture = TestBed.createComponent(TicketReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  
});

describe('TicketReservation',()=>{
  it('Testing for Reservation done or not',()=>{
    //Arrange
    let Reservation = new TicketReservationComponent();

    //Act 
    let isReserved  = Reservation.reserveSeat();

    //Assert
    expect(isReserved).toBeTruthy();
  })

  it('Testing for Reservation done or not',()=>{
    //Arrange
    let Reservation = new TicketReservationComponent();

    //Act 
    let isReserved  = Reservation.reserveSeat();

    //Assert
    expect(isReserved).toBeTruthy();
  })

  it('ToBe and ToEqual TestCase',()=>{
    //Arrange
    var a = false;

    //Assert
    expect(a).toBeFalse();
  })
})
