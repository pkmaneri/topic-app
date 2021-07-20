import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicReadComponent } from './topic-read/topic-read.component';
import { TopicUpdateComponent } from './topic-update/topic-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicCreateComponent,
    TopicReadComponent,
    TopicUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
