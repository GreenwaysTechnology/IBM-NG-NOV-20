//write a component -  app component.
import { Component } from '@angular/core';
import { Address } from './types/address.type';

//{} - Decorator meta data
//template : collection of html snipts and angular instructions.
//template: in line / external html
@Component({
  selector: 'app-root', // to bind this component with custom element called app-root
  //inline template
  // template:`
  //     <div>
  //        <h1>IBM Angular App</h1>
  //     </div>
  // `
  //external template
  templateUrl: './app.component.html'
})
export class AppComponent {
  //models;primitive
  title: string = 'IBM NG Application'
  hitCount: number = 1000;
  isActive: boolean = true;
  //objects
  address:Address = {
    city: 'Coimbatore'
  }
}
