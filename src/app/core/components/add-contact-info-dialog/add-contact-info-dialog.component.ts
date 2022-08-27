import { FormValidators } from "./../form/validation/form-validators";
import { ContactInfo } from "./../../../modules/home/interfaces/contact-info";
import { DialogRef, DIALOG_DATA } from "@angular/cdk/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-contact-info-dialog",
  templateUrl: "./add-contact-info-dialog.component.html",
  styleUrls: ["./add-contact-info-dialog.component.scss"],
})
export class AddContactInfoDialogComponent implements OnInit {
  emptyData =
    "[\r\n" +
    "  {\r\n" +
    '    "firstName": "",\r\n' +
    '    "lastName": "",\r\n' +
    '    "email": "",\r\n' +
    '    "type": ""\r\n' +
    "  },\r\n" +
    "  {\r\n" +
    '    "name": ""\r\n' +
    "  }\r\n" +
    "]";

  constructor(
    public dialogRef: DialogRef<ContactInfo>,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    null;
  }

  add() {
    const data = JSON.parse(this.emptyData);
    const email = data[0].email;

    if (!email) {
      return this.openSnackBar("The Email is Required.");
    }

    if (!this.validateEmail(email)) {
      return this.openSnackBar("The Email is invalid format.");
    }

    this.dialogRef.close(data[0])
  }

  openSnackBar(message: string) {
    this.matSnackBar.open(message, "", {
      duration: 2000,
    });
  }

  validateEmail(email: string) {
    const regularExpression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }
}
