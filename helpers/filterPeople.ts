import dayjs from "dayjs";
import { Person, Filter } from "./types";

export default function filterPeople(people: Person[], filter: Filter) {
  return people.filter((person: Person) => {
    //check whether the date of birth is higher than minimum
    if (filter.dateOfBirthMin != null) {
      if (
        dayjs(person.dateOfBirth.split(" ")[0], "D.M.YYYY").isBefore(
          filter.dateOfBirthMin
        )
      ) {
        return false;
      }
    }

    //check whether the date of birth is lower than maximum
    if (filter.dateOfBirthMax != null) {
      if (
        filter.dateOfBirthMax.isBefore(
          dayjs(person.dateOfBirth.split(" ")[0], "D.M.YYYY")
        )
      ) {
        return false;
      }
    }

    //check id
    if (filter.id !== null && filter.id != person.id) {
      return false;
    }

    //check whether experience is included in the provided range
    const experienceCheck = (
      expMin: number | null,
      expMax: number | null,
      personExp: number | undefined
    ) => {
      const min: number = expMin ?? 0;
      const exp: number = personExp ?? 0;
      return expMax === null ? exp >= min : exp >= min && exp <= expMax;
    };

    if (
      !experienceCheck(
        filter.experienceMin,
        filter.experienceMax,
        person.experience
      )
    ) {
      return false;
    }

    //check string values
    if (
      !person.firstName
        .toUpperCase()
        .includes(filter.firstName.toUpperCase()) ||
      !person.lastName.toUpperCase().includes(filter.lastName.toUpperCase()) ||
      !person.function.toUpperCase().includes(filter.function.toUpperCase())
    ) {
      return false;
    }

    return true;
  });
}
