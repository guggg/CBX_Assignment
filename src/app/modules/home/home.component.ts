import { FormValidators } from './../../core/components/form/validation/form-validators';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { formInfo } from './home.data';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ContactInfo } from './interfaces/contact-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ['select', 'Name', 'Email', 'Type'];
  data: any[] = [
    { Name: 'Hydrogen', Email: 1.0079, Type: 'H' },
    { Name: 'Helium', Email: 4.0026, Type: 'He' },
    { Name: 'Lithium', Email: 6.941, Type: 'Li' },
    { Name: 'Beryllium', Email: 9.0122, Type: 'Be' },
    { Name: 'Boron', Email: 10.811, Type: 'B' },
    { Name: 'Carbon', Email: 12.0107, Type: 'C' },
    { Name: 'Nitrogen', Email: 14.0067, Type: 'N' },
    { Name: 'Oxygen', Email: 15.9994, Type: 'O' },
    { Name: 'Fluorine', Email: 18.9984, Type: 'F' },
    { Name: 'Neon', Email: 20.1797, Type: 'Ne' },
  ];
  dataSource = new MatTableDataSource<ContactInfo>(this.data);
  selection = new SelectionModel<ContactInfo>(true, []);

  formInfo = formInfo;

  formGroup = new FormGroup({
    Name: new FormControl(null, [FormValidators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    null;
  }

  addData() {}

  delete() {
    this.data = this.data.filter(
      (val) => !this.selection.selected.includes(val)
    );

    this.dataSource.data = this.data;
    this.selection.clear();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  onSubmit() {}
}
