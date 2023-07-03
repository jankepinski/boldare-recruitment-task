import { Dayjs } from "dayjs";

export interface Option {
    value: number | string;
    label: string;
  }

export interface Filter{
  property: string;
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

export interface FilterPerson {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirthMin: null | Dayjs;
  dateOfBirthMax: null | Dayjs;
  function: string;
  experienceMin: string;
  experienceMax: string;
  [key: string]: any;
}