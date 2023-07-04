import { Dayjs } from "dayjs";

export interface Option {
  value: number | string;
  label: string;
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  function: string;
  experience?: number | undefined;
}

export interface Filter {
  id: number | null;
  firstName: string;
  lastName: string;
  dateOfBirthMin: null | Dayjs;
  dateOfBirthMax: null | Dayjs;
  function: string;
  experienceMin: number | null;
  experienceMax: number | null;
  [key: string]: any;
}
