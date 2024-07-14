export interface UserForRegisterRequest {
    data: FeedbackUserRegister;
    success: boolean;
    message: string | null;
}

export interface FeedbackUserRegister {
    userName: string;
    email: string;
    password: string;
}