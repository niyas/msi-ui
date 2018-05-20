import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
    constructor(private url: string, private http: Http) {

    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json());
    }
}