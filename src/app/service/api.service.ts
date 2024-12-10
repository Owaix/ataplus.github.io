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
    get_question(id: string, report_id: string): Observable<any> {
        return this.http.get(environment.BASE_URL + 'topic/question/' + id + '/report/' + report_id);
    }
    verify(obj: any): Observable<any> {
        return this.http.post(environment.BASE_URL + 'users/verify-otp', obj);
    }
}