import { DialogModule } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterModule } from "@angular/router";

const modules: any[] = [CommonModule, RouterModule, DialogModule];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [...modules, ...MATERIAL_MODULES, ReactiveFormsModule],
  exports: [...modules, ...MATERIAL_MODULES, ReactiveFormsModule],
})
export class SharedModule {}
