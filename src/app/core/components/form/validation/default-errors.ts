import { ErrorMessage } from "./models/error-message";

export const DEFAULT_ERRORS: ErrorMessage[] = [
  {
    error: "required",
    format: label => `${label}不能為空`
  },
  {
    error: "pattern",
    format: label => `${label}格式有誤`
  },
  {
    error: "minlength",
    format: (label, error) =>
      `${label} 需要至少${error.requiredLength}個字符`
  },
  {
    error: "maxlength",
    format: (label, error) =>
      `${label} 長度不能超過${error.requiredLength}個字符`
  },
  {
    error: "requiredTrue",
    format: (label, error) => `${label}必填`
  },
  {
    error: "email",
    format: (label, error) => `Email格式有誤`
  },
  {
    error: "max",
    format: (label, error) => `${label}必須不小於${error.max}`
  },
  {
    error: "min",
    format: (label, error) => `${label}必須大於等於${error.min}`
  },
  {
    error: "mobile",
    format: (label, error) => `手機號碼格式有誤`
  },
  {
    error: "date",
    format: (label, error) => `日期格式有誤`
  },
  {
    error: "number",
    format: (label, error) => `數值格式有誤`
  },
  {
    error: "match",
    format: (label, error) => `兩次輸入的${label}不一致`
  },
  {
    error: "strength",
    format: (label, error) => `${label}強度未達到要求`
  },
  {
    error: "verifyId",
    format: (label, error) => `請輸入正確的身分證字號`
  }
];
