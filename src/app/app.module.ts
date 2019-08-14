import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';
import { PostComponent } from './social-posts/post/post.component';
import { PostformComponent } from './social-posts/postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostComponent,
    PostformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
