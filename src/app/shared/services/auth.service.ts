import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://amplelogicbackend.onrender.com/users';
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length) {
            const user = users[0];
            this.currentUserSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
          } else {
            throw new Error('Invalid credentials');
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  getUser(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrl);
    }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
}
