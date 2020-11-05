import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/app.profile.service';

@Component({
    selector: 'app-profile',
    template: `
         <h1>{{title}}</h1>
       <app-profilechild [subtitle]="'Profile Page'" [details]="profiles"></app-profilechild>
    `
})
export class ProfileComponent { //implements OnInit {
    //data binding
    profiles: Array<any>;
    title: string = 'Profile Details Page'
    //now constructor will able to grab object of ProfileService
    constructor(private service: ProfileService) {
        //this.profile = this.service.getProfile();
    }
    // init() {
    //     this.profile = this.service.getProfile();
    // }
    ngOnInit() {
        this.profiles = this.service.getProfiles();
    }
}