import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  post = {
    title: '',
    content: '',
    status: 'Draft',
    visibility: 'Private',
    tags: ['Software', 'Web'],
    meta: {
      title: '',
      description: ''
    }
  };

  onPublish() {
    console.log('Post publicado:', this.post);
  }

  onDiscard() {
    console.log('Post descartado');
  }
} 