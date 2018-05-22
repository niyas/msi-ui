import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
    headers;
    options;
    constructor(private url: string, private http: Http) {
       this.headers = new Headers();
       this.headers.append('content-type', 'application/json');
       this.headers.append('Access-Control-Allow-Origin','*');
       this.options = new RequestOptions({ headers: this.headers });
    }

    create(resource) {
         return this.http.post(this.url, JSON.stringify(resource), this.options)
            .map(response => {
              return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if(error.status === 400)
          return Observable.throw(new BadInput(error.json()));
    
        if(error.status === 404)
          return Observable.throw(new NotFoundError());
    
        return Observable.throw(new AppError(error.json()))
      }
}