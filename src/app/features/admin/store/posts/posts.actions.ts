import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: any[] }>()
);
export const loadPostsFailure = createAction(
  '[Posts] Load Posts Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Posts] Delete Post',
  props<{ id: number }>()
);

export const updatePost = createAction(
  '[Posts] Update Post',
  props<{ post: any }>()
);
