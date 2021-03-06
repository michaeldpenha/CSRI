import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../loader/loader.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class HttpInterceptorsService implements HttpInterceptor {
    constructor(private loaderService: LoaderService) { }

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //this.auth.getToken()
        this.loaderService.show();
        return next.handle(this.addToken(req, 'JWD'))
            .catch(error => {
                this.loaderService.hide();
                if (error instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>error).status) {
                        case 403:
                            return this.handleError(error, true);
                        case 401:
                            return this.handleError(error, true);
                        default: return this.handleError(error, false)
                    }
                } else {
                    return Observable.throw(error);
                }
            }).do((res: Response) => {
                
            });
    }

    handleError = (err: any, logOut: any) => {
        if (logOut) {
            //this.loginService.logOutUser();
            // this.showModal('Session Expired','Error');
        } else {
            // this.showModal('Service Error Occured','Error');
        }
        throw new Error(err);
    }
    showModal = (message, headerText) => {
        /**TODO
         * To implement error pop up message
         */
        console.log(message)
    }
}