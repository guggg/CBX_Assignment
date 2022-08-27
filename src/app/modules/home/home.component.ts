import { SelectionModel } from "@angular/cdk/collections";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { FormValidators } from "./../../core/components/form/validation/form-validators";
import { LayoutService } from "./../../layout/services/layout.service";
import { initialData } from "./home.data";
import { ContactInfo } from "./interfaces/contact-info";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @Input() addInfo = null;

  displayedColumns: string[] = ["select", "Name", "Email", "Type"];
  data: ContactInfo[] = initialData;
  dataSource = new MatTableDataSource<ContactInfo>(this.data);
  selection = new SelectionModel<ContactInfo>(true, []);

  formGroup = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null, [
      FormValidators.required,
      FormValidators.email,
    ]),
    type: new FormControl(null),
  });

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.node$.subscribe((result) => {
      if (result?.email) {
        this.data.push(result as ContactInfo);
        this.dataSource.data = this.data;
      }
    });
  }

  delete() {
    this.data = this.data.filter(
      (val) => !this.selection.selected.includes(val)
    );

    this.dataSource.data = this.data;
    this.selection.clear();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  getFullName(item: { lastName: string; firstName: string }) {
    return `${item.firstName} ${item.lastName}`;
  }

  onSubmit() {
    this.data.push(this.formGroup.value as unknown as ContactInfo);
    this.dataSource.data = this.data;
  }
}
