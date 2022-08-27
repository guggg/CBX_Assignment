import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './modules/home/home.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
import { BREAKPOINTS, FlexLayoutModule } from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [
  {
    alias: 'sm',
    suffix: 'sm',
    mediaQuery: 'print and (max-width: 1279px)',
    overlapping: false,
    priority: 1001, // Needed if overriding the default print breakpoint
  },
  {
    alias: 'gt-sm',
    suffix: 'gt-sm',
    mediaQuery: 'print and (min-width: 1280px)',
    overlapping: false,
    priority: 1001, // Needed if overriding the default print breakpoint
  },
];

export const BreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: PRINT_BREAKPOINTS,
  multi: true,
};

const COMPONENTS: any[] = [AppComponent, HomeComponent, PagenotfoundComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    CoreModule,
    FlexLayoutModule,

    // FlexLayoutModule.withConfig({
    //   useColumnBasisZero: false,
    //   printWithBreakpoints: ['sm', 'lg'],
    // }),
  ],
  // providers: [BreakPointsProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
