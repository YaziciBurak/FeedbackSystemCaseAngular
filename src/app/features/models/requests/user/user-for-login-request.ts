export interface UserForLoginRequest {
    data: FeedbackResponseLogin;
    success: boolean;
    message: string | null;
    
}

export interface FeedbackResponseLogin {
    email:string,
    password:string
  }