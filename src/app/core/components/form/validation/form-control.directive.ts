import {
  Directive,
  Host,
  HostBinding,
  Input,
  Optional,
  SkipSelf,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

export function controlPath(name: string, parent: ControlContainer): string[] {
  // tslint:disable-next-line:no-non-null-assertion
  return [...parent.path!, name];
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '.form-control,.form-check-input,.custom-control-input',
})
export class FormControlDirective {
  @Input()
  formControlName!: string;
  @Input()
  formControl!: string;

  @HostBinding('class.is-valid')
  get validClass() {
    if (!this.control) {
      return false;
    }
    return this.control.valid && (this.control.touched || this.control.dirty);
  }

  @HostBinding('class.is-invalid')
  get invalidClass() {
    if (!this.control) {
      return false;
    }
    return this.control.invalid && this.control.touched && this.control.dirty;
  }

  get path() {
    return controlPath(this.formControlName, this.parent);
  }

  get control(): FormControl {
    return this.formDirective && this.formDirective.getControl(this);
  }

  get formDirective(): any {
    return this.parent ? this.parent.formDirective : null;
  }

  constructor(
    // this value might be null, but we union type it as such until
    // this issue is resolved: https://github.com/angular/angular/issues/25544
    @Optional()
    @Host()
    @SkipSelf()
    private parent: ControlContainer
  ) {}
}
