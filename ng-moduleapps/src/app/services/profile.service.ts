import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  public findAll() {
    return 'findAll Profiles'
  }

}
