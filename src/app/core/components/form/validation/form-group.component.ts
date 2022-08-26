import {
  Component,
  ContentChildren,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  OnInit,
  AfterContentInit,
} from '@angular/core';
import { FormControlName } from '@angular/forms';
import { FormMessageComponent } from './form-message.component';
import { ErrorMessage } from './models/error-message';
import { DEFAULT_ERRORS } from './default-errors';

@Component({
  // tslint:disable:component-selector
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '.form-group',
  template: `
    <ng-content></ng-content>
    <form-messages *ngIf="!messagesBlock" [messages]="messages"></form-messages>
  `,
})
export class FormGroupComponent implements OnInit, AfterContentInit {
  @ContentChildren(FormControlName, { descendants: true })
  formControlNames!: QueryList<FormControlName>;

  @Input()
  validationDisabled = false;

  @HostBinding('class.has-error')
  get hasErrors() {
    return (
      this.formControlNames.some(
        (c) => !!!c.valid && (!!c.dirty || !!c.touched)
      ) && !this.validationDisabled
    );
  }

  @HostBinding('class.has-success')
  get hasSuccess() {
    const xx = !!this.formControlNames.some((c) => !!c.dirty || !!c.touched);
    return (
      !this.formControlNames.some((c) => !c.valid) &&
      this.formControlNames.some((c) => !!c.dirty || !!c.touched) &&
      !this.validationDisabled
    );
  }

  @ContentChild(FormMessageComponent)
  public messagesBlock!: FormMessageComponent;

  private errorMessages: ErrorMessage[] = DEFAULT_ERRORS;

  public messages = () => this.getMessages();

  constructor(private elRef: ElementRef) {}

  ngAfterContentInit() {
    if (this.messagesBlock) {
      this.messagesBlock.messages = this.messages;
    }
  }

  ngOnInit() {
    null;
  }

  get label() {
    const label = this.elRef.nativeElement.querySelector('.form-label');

    const span = label.querySelector('span');

    if (span) {
      return span.childNodes[0].textContent.trim();
    }

    return label && label.childNodes.length && label.childNodes[0]
      ? label.childNodes[0].textContent.trim()
      : 'This field';
  }

  get isDirtyOrTouched() {
    return this.formControlNames.some((c) => !!c.dirty && !!c.touched);
  }

  private getMessages(): string[] {
    const messages = [] as string[];
    if (!this.isDirtyOrTouched || this.validationDisabled) {
      return messages;
    }

    const names = this.formControlNames.map((f) => f.name);

    this.formControlNames
      .filter(
        (c, i) =>
          !c.valid &&
          !!c.errors &&
          // filter out formControlNames that share the same name - usually for radio buttons
          names.indexOf(c.name) === i
      )
      .some((control) => {
        let errors = control.errors;

        for (const key in errors) {
          if (Object.prototype.hasOwnProperty.call(errors, key)) {
            const error = this.errorMessages.find((err) => err.error === key);
            if (!error) {
              continue;
            }

            if (control.errors && error.format) {
              messages.push(error?.format(this.label, control.errors[key]));
            }

            break;
          }
        }
        return messages.length > 0;
      });

    return messages;
  }
}
