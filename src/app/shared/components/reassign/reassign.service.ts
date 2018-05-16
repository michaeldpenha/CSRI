import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {endPoints} from '../../../shared/constants/index';

@Injectable()
export class ReassignService {

  constructor(private http: HttpClient) { }

  getSatellite(): Observable<any> {
    return this.http.get( `${endPoints.baseUrl}/${endPoints.urlPath.issuers}/1/satellites` );
  }
  patchSoReassign(param):Observable<any> {
    return this.http.patch( `${endPoints.baseUrl}/${endPoints.urlPath.issuers}/1/reassign-sales-orders`, param);
  }

}
