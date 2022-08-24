import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './modules/home/home.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared/shared.module';
import { BREAKPOINT } from '@angular/flex-layout';

const COMPONENTS: any[] = [AppComponent, HomeComponent, PagenotfoundComponent];

const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 297px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
}];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, AppRoutingModule, NoopAnimationsModule, LayoutModule],
  providers: [
    { provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
