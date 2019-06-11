import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Operator } from '../models/operator';

@Injectable()
export class OperatorService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.actionUrl = '/api/operator';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getAll(): Observable<Operator[]> {
        return this.http.get(this.actionUrl)
          .map(this.extractData)
          .catch(this.handleError);
    }

    public create(body: Operator): Observable<any> {
        return this.http.post(this.actionUrl, body)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response): any {
        return res.json();
    }
}