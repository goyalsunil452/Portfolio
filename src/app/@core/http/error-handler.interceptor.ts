import { AlertService } from './../toaster/alert.service';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { threadId } from 'worker_threads';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor')

@Injectable({
    providedIn:'root'
})

export class ErrorHandlerInterceptor implements HttpHandler {
    constructor(private alertService:AlertService){
    }
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }
    intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(req).pipe(catchError((error)=>this.errorHandler(error)));
    }
    errorHandler(response:HttpHandler):Observable<HttpEvent<any>>{
        if(!environment.production){
            //do something with error
        }
        return throwError(response)
    }
}