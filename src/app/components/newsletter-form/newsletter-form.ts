import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  selector: 'app-newsletter-form',
  styleUrl: './newsletter-form.scss',
  templateUrl: './newsletter-form.html',
})
export class NewsletterForm {
  newsletterForm!: FormGroup;

  constructor(){
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    console.log(this.newsletterForm.value);
  }
}
