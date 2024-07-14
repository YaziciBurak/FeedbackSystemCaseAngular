import { Injectable } from '@angular/core';
import { UserForRegisterRequest } from '../../models/requests/user/user-for-register-request';
import { Observable } from 'rxjs';
import { UserForRegisterResponse } from '../../models/responses/users/user-for-register-response';

@Injectable()
export abstract class AuthBaseService {

  abstract register(register:UserForRegisterRequest):Observable<UserForRegisterResponse>
}
