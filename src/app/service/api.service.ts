import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { environment } from './env';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) { }
    register(user: User): Observable<any> {
        return this.http.post(environment.BASE_URL + 'users/signup', user);
    }
    login(user: User): Observable<any> {
        return this.http.post(environment.BASE_URL + 'users/login', user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
    sendotp(obj: any): Observable<any> {
        return this.http.post(environment.BASE_URL + 'users/send-otp', obj);
    }
    verify(obj: any): Observable<any> {
        return this.http.post(environment.BASE_URL + 'users/verify-otp', obj);
    }
    reset(obj: any): Observable<any> {
        return this.http.post(environment.BASE_URL + 'users/reset', obj);
    }
}