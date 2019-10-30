import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { mergeMap,delay, materialize, dematerialize } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user';

const STORAGE_KEY = 'pure-awesomeness';

@Injectable({
    providedIn:"root"
})

export class DummyService{

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService){}


    addUser(user:UserModel) {
        const users = this.storage.get(STORAGE_KEY) || [];

        users.push(user);

        this.storage.set(STORAGE_KEY, users);
    }
}