import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMessageComponent } from './components/form/validation/form-message.component';
import { FormGroupComponent } from './components/form/validation/form-group.component';
import { FormControlDirective } from './components/form/validation/form-control.directive';
import { FormValidationDirective } from './components/form/validation/form-validation.directive';
import { AddContactInfoDialogComponent } from './components/add-contact-info-dialog/add-contact-info-dialog.component';
import { FormsModule } from '@angular/forms';
import { CustomShowHideDirective } from './directives/custom-layout-directive.directive';

const COMPONENTS: any[] = [FormMessageComponent, FormGroupComponent];

const DIRECTIVES: any[] = [FormControlDirective, FormValidationDirective];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    AddContactInfoDialogComponent,
    CustomShowHideDirective,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class CoreModule {}
