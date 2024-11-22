import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactManagementComponent } from './contact-management.component';
import { ContactListComponent } from './contact-list/contact-list.component';

describe('ContactManagementComponent', () => {
  let component: ContactManagementComponent;
  let fixture: ComponentFixture<ContactManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactManagementComponent, ContactListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
