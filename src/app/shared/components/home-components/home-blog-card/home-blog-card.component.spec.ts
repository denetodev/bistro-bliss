import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogCardComponent } from './home-blog-card.component';

describe('HomeBlogCardComponent', () => {
  let component: HomeBlogCardComponent;
  let fixture: ComponentFixture<HomeBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBlogCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
