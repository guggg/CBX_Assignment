import { ContactInfo } from "./interfaces/contact-info";

export const formInfo = [
  {
    label: 'First Name',
    required: false,
  },
  {
    label: 'Last Name',
    required: false,
  },
  {
    label: 'Email*',
    required: true,
  },
  {
    label: 'Type',
    required: false,
  },
];


export const initialData: ContactInfo[] = [
  {
    lastName: 'Lee',
    firstName: 'Yuer',
    email: 'yuer.lee@cbxsoftware.com',
    type: 'H',
  },
  {
    lastName: 'Tseng',
    firstName: 'Leo',
    email: 'leo.tseng@cbxsoftware.com',
    type: 'He',
  },
  {
    lastName: 'Appleseed',
    firstName: 'John',
    email: 'john.appleseed@cbxsoftware.com',
    type: 'Li',
  },
  {
    lastName: '',
    firstName: 'Dominick',
    email: 'dominick@cbxsoftware.com',
    type: 'Be',
  },
];
