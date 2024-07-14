import { Component, OnInit } from '@angular/core';
import { GetByidFeedbackResponse } from '../../features/models/responses/feedback/getbyid-feedback-response';
import { FeedbackService } from '../../features/services/concretes/feedback.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UpdateFeedbackRequest } from '../../features/models/requests/feedback/update-feedback-request';

@Component({
  selector: 'app-edit-feedback',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './edit-feedback.component.html',
  styleUrl: './edit-feedback.component.css'
})

export class EditFeedbackComponent implements OnInit{
  editForm!: FormGroup;
  feedbackData!: GetByidFeedbackResponse;

  constructor(
    private feedbackService: FeedbackService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateForm();
    const feedbackId = Number(this.route.snapshot.paramMap.get('id'));
    this.getFeedbackById(feedbackId);
  }

  updateForm() {
    this.editForm = this.fb.group({
      userId: ['', [Validators.required]],
      feedbackContent: ['', [Validators.required]]
    });
  }

  getFeedbackById(id: number): void {
    this.feedbackService.getById(id).subscribe({
      next: (response: GetByidFeedbackResponse) => {
        this.feedbackData = response;
        this.editForm.patchValue({
          userId: response.data.userId,
          feedbackContent: response.data.feedbackContent
        });
      },
      error: (error) => {
        console.error('Geri bildirim getirme işlemi başarısız:', error);
      }
    });
  }

  update(): void {
    if (this.editForm.invalid) {
      return;
    }

    const feedbackUpdateRequest: UpdateFeedbackRequest = {
      userId: this.editForm.value.userId,
      feedbackContent: this.editForm.value.feedbackContent,
      id: this.feedbackData.data.id
    };

    this.feedbackService.update(feedbackUpdateRequest).subscribe({
      next: () => {
        this.router.navigate(['/homepage']);
      },
      error: (error) => {
        console.error('Güncelleme işlemi başarısız:', error);
      }
    });
  }
}
