import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactInfoDialogComponent } from './add-contact-info-dialog.component';

describe('AddContactInfoDialogComponent', () => {
  let component: AddContactInfoDialogComponent;
  let fixture: ComponentFixture<AddContactInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
