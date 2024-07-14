import { Injectable } from '@angular/core';
import { AuthBaseService } from '../abstracts/auth-base.service';
import { map, Observable } from 'rxjs';
import { UserForRegisterRequest } from '../../models/requests/user/user-for-register-request';
import { UserForRegisterResponse } from '../../models/responses/users/user-for-register-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { LocalStorageService } from './local-storage.service';
import { UserForLoginRequest } from '../../models/requests/user/user-for-login-request';
import { AccessTokenModel } from '../../models/responses/users/access-token-model';
import { TokenModel } from '../../models/responses/users/token-model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthBaseService {

  private readonly apiUrl: string = `${environment.API_URL}/Auth`;
  token: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private httpClient:HttpClient,private storageService: LocalStorageService) {super()}


  override register(register: UserForRegisterRequest): Observable<UserForRegisterResponse> {
    return this.httpClient.post<UserForRegisterResponse>(`${this.apiUrl}/register`,register);
  }
  login(userLoginRequest: UserForLoginRequest): Observable<AccessTokenModel<TokenModel>> {
    console.log("login içerisi");
    return this.httpClient.post<AccessTokenModel<TokenModel>>(`${this.apiUrl}/login`,userLoginRequest,{ withCredentials: true}
      ).pipe(
        map((response) => { 
        this.storageService.setToken(response.accessToken.token)
        return response;
      }),   
      )  
    }
     loggedIn(): boolean {
       this.token = this.storageService.getToken();
       let isExpired = this.jwtHelper.isTokenExpired(this.token);
       return !isExpired;
     }
    logOut() {
      this.storageService.removeToken();

    }
}
