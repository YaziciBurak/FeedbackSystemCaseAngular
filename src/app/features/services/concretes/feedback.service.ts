import { Injectable } from '@angular/core';
import { FeedbackBaseService } from '../abstracts/feedback-base.service';
import { Observable } from 'rxjs';
import { CreateFeedbackRequest } from '../../models/requests/feedback/create-feedback-request';
import { UpdateFeedbackRequest } from '../../models/requests/feedback/update-feedback-request';
import { CreateFeedbackResponse } from '../../models/responses/feedback/create-feedback-response';
import { DeleteFeedbackResponse } from '../../models/responses/feedback/delete-feedback-response';
import { FeedbackResponse } from '../../models/responses/feedback/getlist-feedback-response';
import { UpdateFeedbackResponse } from '../../models/responses/feedback/update-feedback-response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { GetByidFeedbackResponse } from '../../models/responses/feedback/getbyid-feedback-response';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends FeedbackBaseService{

  private readonly apiURL: string = `${environment.API_URL}/Feedback`;
  constructor(private httpClient: HttpClient) {super() }

  override getList(): Observable<FeedbackResponse> {
    return this.httpClient.get<FeedbackResponse>(this.apiURL);
  }
  override getById(id: number): Observable<GetByidFeedbackResponse> {
    return this.httpClient.get<GetByidFeedbackResponse>(`${this.apiURL}/${id}`);
  }
  override create(feedback: CreateFeedbackRequest): Observable<CreateFeedbackResponse> {
    return this.httpClient.post<CreateFeedbackResponse>(this.apiURL, feedback);
  }
  override update(feedback: UpdateFeedbackRequest): Observable<UpdateFeedbackResponse> {
    return this.httpClient.put<UpdateFeedbackResponse>(`${this.apiURL}`, feedback);
  }
  override delete(id: number): Observable<DeleteFeedbackResponse> {
    return this.httpClient.delete<DeleteFeedbackResponse>(`${this.apiURL}/` + id);
  }

  
}
