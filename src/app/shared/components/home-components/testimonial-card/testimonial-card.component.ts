import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}
