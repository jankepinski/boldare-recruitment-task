import dayjs from "dayjs";
import { Person, FilterPerson } from "./customTypes";

export default function filterPeople(people: Person[], filter: FilterPerson) {
  return people.filter((person: Person) => {

    //check whether the date of birth is higher than minimum
    if (filter.dateOfBirthMin != null) {
      if (
        dayjs(person.dateOfBirth.split(" ")[0], "D.M.YYYY").isBefore(filter.dateOfBirthMin)
      ) {
        return false;
      }
    }

    //check whether the date of birth is lower than maximum
    if (filter.dateOfBirthMax != null) {
      if (
        filter.dateOfBirthMax.isBefore(dayjs(person.dateOfBirth.split(" ")[0], "D.M.YYYY"))
      ) {
        return false;
      }
    }

    //check id
    if (filter.id != "" && parseInt(filter.id) != person.id) {
      return false;
    }

    //check whether experience is included in the provided range
    const experienceCheck = (expMin: string, expMax: string, personExp: number | undefined) => {
      let min: number = 0;
      let max: number = 12;
      let exp: number = 0;

      if (expMin != ""){
        min = parseInt(expMin);
      }
      if (expMax != ""){
        max = parseInt(expMax);
      }
      if (personExp != undefined){
        exp = personExp
      }
      return(exp >= min && exp <= max)
    }

    if(!experienceCheck(filter.experienceMin, filter.experienceMax, person.experience))
    {
      return false;
    }

    //check string values
    if (
      person.firstName.slice(0, filter.firstName.length).toUpperCase() !=
        filter.firstName.toUpperCase() ||
      person.lastName.slice(0, filter.lastName.length).toUpperCase() !=
        filter.lastName.toUpperCase() ||
      person.function.slice(0, filter.function.length).toUpperCase() !=
        filter.function.toUpperCase()
    ) {
      return false;
    }

    return true;
  });
}
