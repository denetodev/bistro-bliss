import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRestaurantAmbienceComponent } from './about-restaurant-ambience.component';

describe('AboutRestaurantAmbienceComponent', () => {
  let component: AboutRestaurantAmbienceComponent;
  let fixture: ComponentFixture<AboutRestaurantAmbienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutRestaurantAmbienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutRestaurantAmbienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
