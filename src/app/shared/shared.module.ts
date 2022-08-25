import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

const modules: any[] = [CommonModule, RouterModule];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [],
  imports: [...modules, ...MATERIAL_MODULES, ReactiveFormsModule],
  exports: [...modules, ...MATERIAL_MODULES, ReactiveFormsModule],
})
export class SharedModule {}
