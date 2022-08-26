import { ErrorMessage } from './models/error-message';

export const DEFAULT_ERRORS: ErrorMessage[] = [
  {
    error: 'required',
    format: (label) => `${label} is required.`,
  },
  {
    error: 'email',
    format: (label, error) => `Invalid Format.`,
  },
];
