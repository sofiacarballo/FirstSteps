import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting.component';
import { NameComponent } from './name/name.component';
import { ListComponent } from './list/list.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    NameComponent,
    ListComponent,
    SearchstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
