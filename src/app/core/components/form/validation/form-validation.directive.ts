import {
  Directive,
  EventEmitter,
  Input,
  Output,
  HostListener,
  ElementRef,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formGroup]',
})
export class FormValidationDirective {
  @Input()
  formGroup!: FormGroup;
  @Output()
  validSubmit = new EventEmitter<any>();

  constructor(private el: ElementRef) {}

  @HostListener('submit')
  onSubmit() {
    this.markAsTouchedAndDirty(this.formGroup);
    if (this.formGroup.valid) {
      this.validSubmit.emit(this.formGroup.value);
    }
  }

  markAsTouchedAndDirty(control: AbstractControl) {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach((key) => {
        let ctl = control.controls[key];
        this.markAsTouchedAndDirty(ctl);
      });
      // invalidControl.focus();
    } else if (control instanceof FormArray) {
      control.controls.forEach((ctl) => {
        this.markAsTouchedAndDirty(ctl);
      });
    } else if (control instanceof FormControl && control.enabled) {
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }
}
