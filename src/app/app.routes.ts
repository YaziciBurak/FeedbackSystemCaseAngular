import { Routes } from '@angular/router';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { LoginComponent } from './features/components/login/login/login.component';
import { RegisterComponent } from './features/components/register/register/register.component';
import { CreateFeedbackComponent } from './pages/create-feedback/create-feedback.component';
import { EditFeedbackComponent } from './pages/edit-feedback/edit-feedback.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
    },
    {
        path: 'homepage', component: FeedbackComponent, children: [
            { path: "", pathMatch: "full", component: FeedbackComponent },
        ]
    },
    { path: 'login', component:LoginComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'create', component:CreateFeedbackComponent},
    { path: 'edit/:id', component:EditFeedbackComponent}
];
