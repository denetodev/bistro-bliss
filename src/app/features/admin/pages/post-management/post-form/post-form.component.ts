import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost } from '../../../../../shared/interfaces/blog.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Input() post: BlogPost = {
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

  @Output() savePost = new EventEmitter<BlogPost>();
  @Output() cancel = new EventEmitter<void>();

  categories = [
    'Receitas',
    'Dicas',
    'Eventos',
    'Novidades',
    'Cultura Gastronômica',
  ];

  onSave() {
    this.savePost.emit(this.post);
  }

  onCancel() {
    this.cancel.emit();
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    // Aqui você implementaria a lógica de upload
    // Por enquanto, vamos apenas simular com uma URL local
    this.post.imageUrl = URL.createObjectURL(file);
  }

  addTag(event: any) {
    const tag = event.target.value.trim();
    if (tag && !this.post.tags?.includes(tag)) {
      this.post.tags = [...(this.post.tags || []), tag];
    }
    event.target.value = '';
  }

  removeTag(tagToRemove: string) {
    this.post.tags = this.post.tags?.filter((tag) => tag !== tagToRemove);
  }
}
