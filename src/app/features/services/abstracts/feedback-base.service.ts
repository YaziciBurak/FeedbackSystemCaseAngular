import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackResponse } from '../../models/responses/feedback/getlist-feedback-response';
import { CreateFeedbackRequest } from '../../models/requests/feedback/create-feedback-request';
import { CreateFeedbackResponse } from '../../models/responses/feedback/create-feedback-response';
import { UpdateFeedbackRequest } from '../../models/requests/feedback/update-feedback-request';
import { UpdateFeedbackResponse } from '../../models/responses/feedback/update-feedback-response';
import { DeleteFeedbackResponse } from '../../models/responses/feedback/delete-feedback-response';
import { GetByidFeedbackResponse } from '../../models/responses/feedback/getbyid-feedback-response';

@Injectable()
export abstract class FeedbackBaseService {

  abstract getList():Observable<FeedbackResponse>;
  abstract getById(id:number):Observable<GetByidFeedbackResponse>;
  abstract create(feedback:CreateFeedbackRequest):Observable<CreateFeedbackResponse>;
  abstract update(feedback:UpdateFeedbackRequest):Observable<UpdateFeedbackResponse>;
  abstract delete(id:number):Observable<DeleteFeedbackResponse>;
}
