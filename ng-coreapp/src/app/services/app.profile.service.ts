import { Injectable } from '@angular/core';
import { PROFILES } from '../mock-data/profile.mock';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor() { }
    //api
    getProfiles(): any {
        return PROFILES;
    }
}