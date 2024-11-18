import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/component-post-form.component';

@NgModule({
  declarations: [PostFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [PostFormComponent],
})
export class AdminComponentsModule {}
