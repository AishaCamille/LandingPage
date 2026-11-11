import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';

@Component({
  imports: [BtnPrimary],
  selector: 'app-newsletter-form',
  styleUrl: './newsletter-form.scss',
  templateUrl: './newsletter-form.html',
})
export class NewsletterForm {}
