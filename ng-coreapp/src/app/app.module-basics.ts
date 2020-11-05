//Module Object: must have root module object.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //basic browser functionality
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter.component';
import { HelloComponent } from './hello.component';

//used to create module objects either or submodule.
@NgModule({
  declarations: [AppComponent,GreeterComponent,HelloComponent],   //view objects - you tell the class name,ng create object
  imports: [BrowserModule],       // module objects -submodule
  providers: [],     //services objects
  bootstrap: [AppComponent] // main component/ entry component
})
export class AppModule { }