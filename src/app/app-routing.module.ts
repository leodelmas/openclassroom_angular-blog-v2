import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'new-post', component: NewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
