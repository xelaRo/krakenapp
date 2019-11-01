import { Injectable } from '@angular/core';
import { LocalApiService } from './local-api.service';
import { Observable } from 'rxjs';

const url = "assets/data.json";

@Injectable()
export class UserService{
    constructor(private api: LocalApiService){}


    attemptLogin(credentials) : Observable<any>{
         var ceva = this.api.get(url);
        
        return ceva;
    }
}