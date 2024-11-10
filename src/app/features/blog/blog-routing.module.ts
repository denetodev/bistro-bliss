import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      { path: '', component: BlogSectionComponent },
      { path: ':id', component: BlogPostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
