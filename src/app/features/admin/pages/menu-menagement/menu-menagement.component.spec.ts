import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMenagementComponent } from './menu-menagement.component';

describe('MenuMenagementComponent', () => {
  let component: MenuMenagementComponent;
  let fixture: ComponentFixture<MenuMenagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuMenagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
