import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//servicios
import { AuthenticationService } from 'src/app/servicios/http/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout();
          location.reload(true);
      }
      
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }

  constructor(private authenticationService: AuthenticationService) { }
}
