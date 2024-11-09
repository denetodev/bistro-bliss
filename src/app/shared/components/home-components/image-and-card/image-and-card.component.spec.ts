import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndCardComponent } from './image-and-card.component';

describe('ImageAndCardComponent', () => {
  let component: ImageAndCardComponent;
  let fixture: ComponentFixture<ImageAndCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageAndCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageAndCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
