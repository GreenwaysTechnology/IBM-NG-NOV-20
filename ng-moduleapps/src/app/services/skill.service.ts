import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  findAll(){
    return 'findAll skills'
  }
}
