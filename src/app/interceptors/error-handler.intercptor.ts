import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandler implements HttpInterceptor {
  constructor(private notifier: ToastrService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(0),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = error.error.reason;
        this.notifier.error(
          errorMessage || 'No Internet/Server Connection available'
        );
        return throwError(errorMessage);
      })
    );
  }
}
