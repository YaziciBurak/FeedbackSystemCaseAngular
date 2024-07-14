export interface GetlistFeedbackResponse {
    id: number;
    userId: number;
    feedbackContent: string;
}

export interface FeedbackResponse {
    data: GetlistFeedbackResponse[];
    success: boolean;
    message: string | null;
  }