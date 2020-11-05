import { Component } from '@angular/core';

@Component({
    selector: 'app-greeter',
    template: `
       <div>
          <h1>Greeter Component</h1>
          <app-hello></app-hello>
       </div>
    `
})
export class GreeterComponent {

}