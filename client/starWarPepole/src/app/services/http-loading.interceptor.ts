import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(this.preloaderChaeck.bind(this)))
    .pipe(catchError(this.preloaderShutDown.bind(this)));
  }
  preloaderChaeck($event: HttpEvent<any>) {
    if (!$event.type) {
      this.loader.show();
    }
    if ($event instanceof HttpResponse) {
          this.loader.hide();
    }
  }
  preloaderShutDown(err) {
    this.loader.hide();
  }
}

