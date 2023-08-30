import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseUrl;

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  private http = inject(HttpClient);

  constructor() {
    //this.checkAuthStatus().subscribe();
  }

}
