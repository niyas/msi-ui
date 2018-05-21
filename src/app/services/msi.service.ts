import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
  
@Injectable()
export class MsiService extends DataService {
  constructor(http: Http) { 
    super('http://localhost:63299/api/msi', http);
  }
}
