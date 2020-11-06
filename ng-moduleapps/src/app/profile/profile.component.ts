import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../services/profile.service';
// import { SkillService } from '../services/skill.service';
import { ProfileService, SkillService } from '../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [

  ]
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private pservice: ProfileService, private sservice: SkillService) { }

  ngOnInit(): void {
    let result = this.pservice.findAll() + this.sservice.findAll();
    this.profile = result;
  }

}
