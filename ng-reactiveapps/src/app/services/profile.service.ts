import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  //api
  findAll(): Observable<any> {
    //stream of data : Observable.of
    return of({ id: 1, name: 'a' }, { id: 2, name: 'b' })
      .pipe(
        map(profile => profile.name), map(name => name.toUpperCase()));
  }
}
