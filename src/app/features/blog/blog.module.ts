import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogSectionComponent } from '../blog/blog-section/blog-section.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCardComponent } from '../../shared/components/blog-components/blog-card/blog-card.component';
import { SharedModule } from '../../shared/components/shared.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogSectionComponent,
    BlogPostComponent,
    BlogCardComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
