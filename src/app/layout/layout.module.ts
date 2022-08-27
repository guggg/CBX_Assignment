import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

const COMPONENTS: any[] = [HeaderComponent, FooterComponent, LayoutComponent];
const COMPONENTS_NOROUTE: any[] = [];

@NgModule({
  declarations: [COMPONENTS, LayoutComponent],
  imports: [SharedModule],
  entryComponents: COMPONENTS_NOROUTE,
})
export class LayoutModule {}
