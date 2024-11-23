import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG Imports
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';

// Components
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [PostListComponent, PostFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    FileUploadModule,
    EditorModule,
    ChipsModule,
    InputTextModule,
  ],
})
export class PostManagementModule {}
