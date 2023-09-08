import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { AuthStatus, User } from '../interfaces';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  //! Al mundo exterior
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    //this.checkAuthStatus().subscribe();
  }

  login(email:string, password: string): Observable<boolean>{

  const utl = `${this.baseUrl}/api/auth/login`
  const body = {}

  return of(true);
  }



}
