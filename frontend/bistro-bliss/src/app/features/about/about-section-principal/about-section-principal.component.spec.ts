import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionPrincipalComponent } from './about-section-principal.component';

describe('AboutSectionPrincipalComponent', () => {
  let component: AboutSectionPrincipalComponent;
  let fixture: ComponentFixture<AboutSectionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSectionPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSectionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
