import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  constructor(private hc: HttpClient) {}

  getUserCardAPI(): Observable<any> {
    return this.hc.get('https://reqres.in/api/users?page=2');
  }

  getTODOAPI(): Observable<any> {
    return this.hc.get('https://jsonplaceholder.typicode.com/todos');
  }

  getUserData(): Observable<any> {
    return this.hc.get('https://jsonplaceholder.typicode.com/users');
  }
}
