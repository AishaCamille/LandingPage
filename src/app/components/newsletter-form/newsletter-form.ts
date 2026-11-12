import { Component, signal } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Newsletter } from '../../services/newsletter';

@Component({
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  providers: [
    Newsletter
  ],
  selector: 'app-newsletter-form',
  styleUrl: './newsletter-form.scss',
  templateUrl: './newsletter-form.html',
})
export class NewsletterForm {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: Newsletter){
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    this.loading.set(true);
    if(this.newsletterForm.valid){
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => {
          this.newsletterForm.reset();
          this.loading.set(false);
        }
      });
    }
  }
}
