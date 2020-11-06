import { Component } from '@angular/core';
import { Book } from './app.form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-formsapp';
  submitted: boolean = false;
  book: any
  constructor() {
    this.book = new Book(Math.random(), 'Learn Angular', 'Misko');
  }
  onSubmit(){
    console.log(this.book);
    this.submitted = true;
  }
}
