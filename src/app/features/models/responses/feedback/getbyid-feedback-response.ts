export interface GetbyidDataFeedbackResponse {
    id: number;
    userId: number;
    feedbackContent: string;
}

export interface GetByidFeedbackResponse {
    data: GetbyidDataFeedbackResponse;
    success: boolean;
    message: string | null;
  }