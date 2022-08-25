import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-messages',
  template: `<span [ngClass]="className" *ngFor="let message of messages()">
    <i class="icon icon-warn"></i>{{ message }}</span
  >`,
  styles: [
    `
      .invalid,
      .valid {
        display: block;
      }
    `,
  ],
})
export class FormMessageComponent {
  @Input()
  messages = () => [];

  get className() {
    return 'invalid';
  }

  constructor() {}
}
