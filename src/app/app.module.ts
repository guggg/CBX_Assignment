import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";

import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { HomeComponent } from "./modules/home/home.component";
import { PagenotfoundComponent } from "./modules/pagenotfound/pagenotfound.component";
import { SharedModule } from "./shared/shared.module";
import {
  BREAKPOINT,
  BREAKPOINTS,
  DEFAULT_BREAKPOINTS,
  FlexLayoutModule,
} from "@angular/flex-layout";

const PRINT_BREAKPOINTS = [
  {
    alias: "sm",
    mediaQuery: "screen and (max-width: 1279px)",
    overlapping: false,
    priority: 1001,
  }
];

export const BreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: DEFAULT_BREAKPOINTS,
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
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ["sm"],
    }),
  ],
  providers: [
    { provide: BREAKPOINT, useValue: PRINT_BREAKPOINTS, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
