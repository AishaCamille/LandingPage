import { Component } from '@angular/core';
import { Header} from '../header/header';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [ Header, NgOptimizedImage],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
