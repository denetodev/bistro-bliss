import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogPost } from '../../../../shared/interfaces/blog.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './component-post-form.component.html',
  styleUrls: ['./component-post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Input() editMode = false;
  @Input() editPost?: BlogPost;
  @Output() savePost = new EventEmitter<BlogPost>();
  @Output() cancel = new EventEmitter<void>();

  formPost: BlogPost = {
    title: '',
    content: '',
    status: 'Draft',
    category: '',
    imageUrl: '',
    tags: [],
    author: '',
    publishDate: new Date(),
    visibility: 'Public',
    meta: {
      title: '',
      description: '',
    },
  };

  ngOnInit() {
    if (this.editMode && this.editPost) {
      this.formPost = { ...this.editPost };
    }
  }

  onPublish() {
    this.formPost.status = 'Published';
    this.savePost.emit(this.formPost);
  }

  onDiscard() {
    this.cancel.emit();
  }

  onSave() {
    this.savePost.emit(this.formPost);
  }
}
