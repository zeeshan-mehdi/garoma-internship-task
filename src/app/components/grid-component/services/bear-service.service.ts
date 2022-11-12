import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BearServiceService {

  constructor(private http:HttpClient) { 
    
  }

  getBears (): Observable<any> {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }


}
