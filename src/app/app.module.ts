import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubtopicsComponent } from './subtopics/subtopics.component';
import { ChildComponent } from './child/child.component';
import { TemplateDrivenfromsComponent } from './template-drivenfroms/template-drivenfroms.component';


@NgModule({
  declarations: [
    AppComponent,
    SubtopicsComponent,
    ChildComponent,
    TemplateDrivenfromsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
