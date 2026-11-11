import { Component } from '@angular/core';
import { Header} from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsletterForm } from '../newsletter-form/newsletter-form';

@Component({
  imports: [
    Header,
    NgOptimizedImage, 
    BtnPrimary, 
    NewsletterForm],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
