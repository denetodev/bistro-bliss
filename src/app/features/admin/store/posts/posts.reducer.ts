import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './posts.actions';

export interface PostState {
  posts: any[];
  loading: boolean;
  error: any;
}

export const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state) => ({
    ...state,
    loading: true,
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
