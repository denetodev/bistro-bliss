import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMenagementComponent } from './reservation-menagement.component';

describe('ReservationMenagementComponent', () => {
  let component: ReservationMenagementComponent;
  let fixture: ComponentFixture<ReservationMenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationMenagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationMenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
