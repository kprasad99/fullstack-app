import { Injectable } from '@angular/core';
import { UserInfo } from './user.info';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationManager {

    userInfo: UserInfo;


    isLoggedIn() {
        return this.userInfo ? true : false;
    }

}
