import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMenagementComponent } from './contact-menagement.component';

describe('ContactMenagementComponent', () => {
  let component: ContactMenagementComponent;
  let fixture: ComponentFixture<ContactMenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactMenagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
