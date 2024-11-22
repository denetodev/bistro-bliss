import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {
  //   loadPosts$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(PostsActions.loadPosts),
  //       mergeMap(() =>
  //         this.postsService.getPosts().pipe(
  //           map((posts) => PostsActions.loadPostsSuccess({ posts })),
  //           catchError((error) => of(PostsActions.loadPostsFailure({ error })))
  //         )
  //       )
  //     )
  //   );
  //   constructor(
  //     private actions$: Actions,
  //     private postsService: any // Substitua 'any' pelo seu serviço de posts
  //   ) {}
}
