import { ContactInfo } from "./../../modules/home/interfaces/contact-info";
import { LayoutService } from "./../services/layout.service";
import { Dialog } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { AddContactInfoDialogComponent } from "src/app/core/components/add-contact-info-dialog/add-contact-info-dialog.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: Dialog, private layoutService: LayoutService) {}

  ngOnInit(): void {
    null;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(AddContactInfoDialogComponent, {
      width: "90%",
    });

    dialogRef.closed.subscribe((result: any) => {
      this.layoutService.addContactInfo(result);
    });
  }
}
