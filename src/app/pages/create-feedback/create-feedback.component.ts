import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FeedbackService } from '../../features/services/concretes/feedback.service';
import { CreateFeedbackRequest } from '../../features/models/requests/feedback/create-feedback-request';

@Component({
  selector: 'app-create-feedback',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.css'
})
export class CreateFeedbackComponent implements OnInit {
  
  createFormFeedbackForm!: FormGroup;

  constructor(
    private service: FeedbackService,
    private builder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createFormFeedbackForm = this.builder.group({
      userId: ['', [Validators.required]],
      feedbackContent: ['', [Validators.required]]
    });
  }

  create() {
    if (this.createFormFeedbackForm.invalid) {
      return;
    }

    let feedback: CreateFeedbackRequest = {
      userId: this.createFormFeedbackForm.value.userId,
      feedbackContent: this.createFormFeedbackForm.value.feedbackContent
    };

    this.service.create(feedback).subscribe({
      next: (response) => {
        this.router.navigate(['/homepage']);
      },
      error: (error) => {
        console.error('Ekleme işlemi başarısız:', error);
      }
    });
  }
}


