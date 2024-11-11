import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCardComponent } from '../../shared/components/blog-components/blog-card/blog-card.component';
import { BlogService } from '../../shared/services/blog.service';

@NgModule({
  declarations: [BlogSectionComponent, BlogPostComponent, BlogCardComponent],
  imports: [CommonModule, BlogRoutingModule, HttpClientModule],
  providers: [BlogService],
  exports: [BlogCardComponent, BlogSectionComponent],
})
export class BlogModule {}
