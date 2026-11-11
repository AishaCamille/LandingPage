import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  imports: [
  ],
  selector: 'app-btn-primary',
  styleUrl: './btn-primary.scss',
  templateUrl: './btn-primary.html',
})
export class BtnPrimary {
  @Input("btn-text") btnText: string = ""; //p escrever no botão la no html
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  
  @Output("submit") onSubmit = new EventEmitter();
  submit(){
    this.onSubmit.emit();
  }
}
