export interface CreateFeedbackResponse{
  data: CreateFeedbackResponse;
  success: boolean;
  message: string | null;
}

export interface CreateFeedbackResponse {
  id: number;
  userId: number;
  feedbackContent: string;
}