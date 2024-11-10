import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCardComponent } from '../../shared/components/blog-components/blog-card/blog-card.component';

@NgModule({
  declarations: [BlogSectionComponent, BlogPostComponent, BlogCardComponent],
  imports: [CommonModule, CardModule, BlogRoutingModule],
  exports: [BlogCardComponent, BlogSectionComponent],
})
export class BlogModule {}
