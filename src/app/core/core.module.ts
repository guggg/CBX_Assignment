import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./../shared/shared.module";
import { AddContactInfoDialogComponent } from "./components/add-contact-info-dialog/add-contact-info-dialog.component";
import { FormControlDirective } from "./components/form/validation/form-control.directive";
import { FormGroupComponent } from "./components/form/validation/form-group.component";
import { FormMessageComponent } from "./components/form/validation/form-message.component";
import { FormValidationDirective } from "./components/form/validation/form-validation.directive";

const COMPONENTS: any[] = [FormMessageComponent, FormGroupComponent];

const DIRECTIVES: any[] = [FormControlDirective, FormValidationDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, AddContactInfoDialogComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class CoreModule {}
