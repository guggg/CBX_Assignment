import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './modules/home/home.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
import { BREAKPOINT } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS: any[] = [AppComponent, HomeComponent, PagenotfoundComponent];

const PRINT_BREAKPOINTS = [
  {
    alias: 'sm',
    mediaQuery: 'screen and (max-width: 1279px)',
    overlapping: false,
    priority: 1001,
  },
  {
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1280px)',
    overlapping: false,
    priority: 1001,
  },
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    CoreModule,
    FlexLayoutModule

    // FlexLayoutModule.withConfig({
    //   useColumnBasisZero: false,
    //   printWithBreakpoints: ['sm', 'lg'],
    // }),
  ],
  providers: [
    // { provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
