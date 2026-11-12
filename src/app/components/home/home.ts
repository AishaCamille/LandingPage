import { Component } from '@angular/core';
import { Header} from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { NewsletterForm } from '../newsletter-form/newsletter-form';
import { Cards } from '../cards/cards';
import { SpecialistContact } from '../specialist-contact/specialist-contact';
import { Footer } from '../footer/footer';

@Component({
  imports: [
    Header,
    NgOptimizedImage,
    BtnPrimary,
    NewsletterForm,
    Cards,
    SpecialistContact,
    Footer
],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
