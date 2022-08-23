import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './modules/home/home.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared/shared.module';

const COMPONENTS: any[] = [AppComponent, HomeComponent, PagenotfoundComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, AppRoutingModule, NoopAnimationsModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
