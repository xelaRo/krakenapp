import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn:"root"
})

export class LocalApiService {

    constructor(private http:HttpClient){}

    private formatError(error: any) {
     return throwError(error.error)
    }

    get(path: string): Observable<any>{
        return this.http.get(path)
        .pipe(this.formatError);
    }

    post(path: string, body: Object = {}) : Observable<any>{
        return this.http.post(path,JSON.stringify(body))
        .pipe(this.formatError)
    }

    put(path: string, body: Object ={}): Observable<any>{
        return this.http.put(path, JSON.stringify(body))
        .pipe(this.formatError)
    }

    delete(path): Observable<any> {
        return this.http.delete(path).pipe(catchError(this.formatError));
    }
}