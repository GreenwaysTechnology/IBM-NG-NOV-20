import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
             <div>
                 <h1>Parent</h1>
                 <h2>The Value From Child {{value}}</h2>
                 <hr>
                 <app-child (onSendRequest)="getValue($event)" ></app-child>
             </div>
    `
})
export class ParentComponent {
    value: any;
    public getValue(event: any) {
        this.value = event;
    }
}
@Component({
    selector: 'app-child',
    template: `
        <div>
           <h1>Child</h1>
           <button (click)="onSend()">Send Data To Parent</button>
        </div>
    `
})
export class ChildComponent {

    //custom event
    @Output()
    onSendRequest = new EventEmitter<string>();

    public onSend() {
        //send data to parent
        this.onSendRequest.emit('Hello,I am from Child')
    }
}


@Component({
    selector: 'app-events',
    templateUrl: './app.event.component.html'
})
export class EventComponent {
    txtValue1: any = "..."
    txtValue2: string = "...";
    txtValue3: string = "....";
    txtValue4: string = ".....";

    public onClick(data) {
        alert('button is clicked' + data)
    }
    public onInput(event: any) {
        console.dir(event.target);
        //console.log('on input' + event.target.value)
        this.txtValue1 = event.target.value;
    }
}