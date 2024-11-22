import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostManagementComponent } from './post-management.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PostManagementComponent,
    children: [
      { path: '', component: PostListComponent },
      { path: 'new', component: PostFormComponent },
      { path: 'edit/:id', component: PostEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostManagementRoutingModule {}
