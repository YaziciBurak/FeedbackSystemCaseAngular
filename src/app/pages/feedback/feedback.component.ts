import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackResponse } from '../../features/models/responses/feedback/getlist-feedback-response';
import { FeedbackService } from '../../features/services/concretes/feedback.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  feedbackList: FeedbackResponse = { data: [], success: false, message: null };
  selectedFeedback: any;
  createFeedbackForm!: FormGroup;
  submitted = false;
  constructor(private service: FeedbackService, private feedbackService: FeedbackService,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.loadFeedbackList();
    this.createForm();
  }
  createForm() {
    this.createFeedbackForm = this.formBuilder.group({
      userId: ['', Validators.required],
      feedbackContent: ['', Validators.required]
    });
  }

  loadFeedbackList() {
    this.service.getList().subscribe(
      data => {
        this.feedbackList = data;
        console.log("Gelen Veri:", data);
      },
      error => {
        console.error('Veri alınırken hata oluştu:', error);
      }
    );
  }
  
  delete(id: number) {
    this.feedbackService.delete(id).subscribe({
      next: () => {
      this.loadFeedbackList();
      },
    error: (error) => {   
    }
    }) 
  }
  createFeedback() {
    this.submitted = true; 

    if (this.createFeedbackForm.valid) {
      const feedback: any = { ...this.createFeedbackForm.value }; 

     
      this.feedbackService.create(feedback).subscribe({
        complete: () => {
          this.loadFeedbackList();
          this.createFeedbackForm.reset();
          this.submitted = false;
        }
      });
    }
  }
}
