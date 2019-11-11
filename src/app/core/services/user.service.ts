import { Injectable } from '@angular/core';
import { LocalApiService } from './local-api.service';
import { User } from 'src/app/shared/models/user';

const url = 'assets/data.json';

@Injectable()
export class UserService{
    constructor(private api: LocalApiService){}

  users: User[] = [];

  getUsers(){
      this.api.get(url)
      .subscribe({
        next(data) {
          for(let user of data.users) {
            this.users.push(
              new User(){
                userId: user.id,
                userName: user.userName,
                password: user.password,
                email: user.email,
                passwordExpiryDate: user.passwordExpiryDate,
                token: user.token
              }
            );
          }
        },
        error(err) { console.log(err); }
      });
  }

  findUser(userName: string){
    for(let user of this.users){
      console.log(user);
    }
  }
}
