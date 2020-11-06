import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-profilechild',
    template: `
      <h2 style="color:blue">{{title}}</h2>
      <div>
      Boolean Attribute
       <h1 [hidden]="isHidden">Hello,I am hidden</h1>
    <div>
    <div [ngSwitch]="feedback">
     <p *ngSwitchCase="'good'">Good</p>
     <p *ngSwitchCase="'verygood'">Very Good</p>
     <p *ngSwitchCase="'bad'">Bad</p>
     <p *ngSwitchDefault>Your input is not matching</p>
  </div>
      <div>
          <div *ngFor="let profile of profiles" > 
            <div *ngIf="profile.status; else mycondition" >
                <p>{{profile.id}}</p>
                <p>{{profile.name}}</p>
                <p>{{profile.address.city}}</p>
                <p>{{profile.status ? 'Active' : 'InActive'}}</p>
                <p>{{profile.logindate | date:'dd/MM/yyyy'}}</p>
               <p>{{profile.salary | currency:'INR'}}
               <h3>Today {{today | date | uppercase }}</h3>
               <h3>Points {{profile.points | decimalFraction:3 }}</h3>
            <div>
           </div>
      </div>
   <div>
   <ng-template #mycondition>
       <h1>Sorry! {{profile.name}} is InActive</h1>
   </ng-template>
       <!-- <pre>{{profiles | json }}</pre> -->
   </div>


    `
})
export class ProfileChildComponent {
    @Input('details') // profile= details
    profiles: Array<any>;
    @Input('subtitle')
    title: string;
    isHidden: boolean = true;
    isEnabled: boolean = false;
    today: any = new Date();
    feedback:string ='foo';
    constructor() { }
}