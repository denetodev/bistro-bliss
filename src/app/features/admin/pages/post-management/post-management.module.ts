import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from '../../../../shared/services/api/post.service';
import { PostManagementComponent } from './post-management.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [PostManagementComponent, PostFormComponent],
  exports: [PostFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  providers: [PostService, DatePipe],
})
export class PostManagementModule {}
