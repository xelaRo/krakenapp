import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class LocalApiService {

    constructor(private http:HttpClient){}

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };

    get(path: string): Observable<any>{
        return this.http.get(path)
        .pipe(catchError(this.handleError));
    }

    post(path: string, body: Object = {}) : Observable<any>{
        return this.http.post(path,JSON.stringify(body))
        .pipe(catchError(this.handleError));
    }

    put(path: string, body: Object ={}): Observable<any>{
        return this.http.put(path, JSON.stringify(body))
        .pipe(catchError(this.handleError));
    }

    delete(path): Observable<any> {
        return this.http.delete(path)
        .pipe(catchError(this.handleError));
    }
}