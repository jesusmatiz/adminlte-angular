import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has(InterceptorSkipHeader)) {

      const access_token = sessionStorage.getItem('access_token');
      
      if (access_token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${access_token}`)
        });

        return next.handle(cloned);
      }
    }

    req.headers.delete(InterceptorSkipHeader);
    return next.handle(req);
  }
}