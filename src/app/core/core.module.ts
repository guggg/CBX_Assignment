import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMessageComponent } from './components/form/validation/form-message.component';
import { FormGroupComponent } from './components/form/validation/form-group.component';
import { FormControlDirective } from './components/form/validation/form-control.directive';

const COMPONENTS: any[] = [FormMessageComponent, FormGroupComponent];

const DIRECTIVES: any[] = [FormControlDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class CoreModule {}
