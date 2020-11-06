//Module Object: must have root module object.

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; //basic browser functionality
import { AppComponent } from './app.component';
import { ChildComponent, EventComponent, ParentComponent } from './app.events.component';
import { ProfileComponent } from './app.profile.component';
import { ProfileChildComponent } from './app.profilechild.component';
import { DecimalFractionPipe } from './pipes/decimalfraction.pipe';
import { ProfileService } from './services/app.profile.service';


@NgModule({
    declarations: [AppComponent,
        DecimalFractionPipe,
        ProfileComponent,
        ProfileChildComponent, 
        EventComponent,
        ParentComponent,
        ChildComponent
    
    ],   //view objects - you tell the class name,ng create object
    imports: [BrowserModule,FormsModule],       // module objects -submodule
    // providers: [ProfileService],     //services objects
    bootstrap: [AppComponent] // main component/ entry component
})
export class AppModule { }