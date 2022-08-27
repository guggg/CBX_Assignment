// import { Directive } from '@angular/core';
// import { LayoutDirective } from '@angular/flex-layout';

// const selector = `[fxHide.xs.print]`;
// const inputs = ['fxHide.xs.print'];

// // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
// @Directive({selector, inputs})
// export class CustomLayoutDirectiveDirective extends LayoutDirective {
//   protected override inputs = inputs;
// }

import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxHide.xs.ngb], [fxHide.sm.ngb]`;
const inputs = ['fxHide.xs.ngb', 'fxHide.sm.ngb'];

// eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
@Directive({ selector, inputs })
export class CustomShowHideDirective extends ShowHideDirective {
  protected override inputs = inputs;
}
