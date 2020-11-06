import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-reactiveapps';
  profile: any;
  constructor(private service: ProfileService) {

  }
  ngOnInit() {
    //subscriber
    this.service.findAll().subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('done')
    );
  }
}
