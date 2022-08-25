import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class FormValidators extends Validators {
  static agreement(control: AbstractControl): ValidationErrors | null {
    return control.value === true
      ? null
      : {
          agreement: true,
        };
  }
}
