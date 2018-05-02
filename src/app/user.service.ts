import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  public list() {
    const params = new HttpParams().set('results', '50');
    return this.http.get('https://randomuser.me/api/', { params });
  }
}
