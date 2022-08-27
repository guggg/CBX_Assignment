import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { ContactInfo } from "src/app/modules/home/interfaces/contact-info";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  node$: BehaviorSubject<ContactInfo> = new BehaviorSubject<ContactInfo>(
    {} as ContactInfo
  );

  constructor() {}

  addContactInfo(data: ContactInfo) {
    this.node$.next(data);
  }
}
