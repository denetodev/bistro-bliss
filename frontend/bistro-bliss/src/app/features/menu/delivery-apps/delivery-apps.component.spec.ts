import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAppsComponent } from './delivery-apps.component';

describe('DeliveryAppsComponent', () => {
  let component: DeliveryAppsComponent;
  let fixture: ComponentFixture<DeliveryAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
