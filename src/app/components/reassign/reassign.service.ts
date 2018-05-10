import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ReassignService {

  constructor(private http: HttpClient) { }

  getSatellite(): Observable<any> {
    return this.http.get('http://172.30.30.20:8096/api/issuers/1/satellites');
  }

  getSalesOrder(): Observable<any> {
    return this.http.get('http://172.30.30.20:8096/api/issuers/1/sales-orders');
  }

  patchSoReassign(param):Observable<any> {
    return this.http.patch('http://172.30.30.20:8096/api/issuers/1/reassign-sales-orders', param);
  }

}
