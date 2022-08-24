import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";

const modules: any[] = [CommonModule, RouterModule, FlexLayoutModule];

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [...modules, ...MATERIAL_MODULES],
  exports: [...modules, ...MATERIAL_MODULES],
})
export class SharedModule {}
