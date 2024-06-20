import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  events = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getList$(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/users`);
  }

  create$(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, user);
  }

  getById$(id: number): Observable<User> {
    if (id === 5) {
      return this.http.get<User>(`${environment.apiBaseUrl}/users/${id}`).pipe(
        delay(5000),
      );
    }

    return this.http.get<User>(`${environment.apiBaseUrl}/users/${id}`);
  }
}
