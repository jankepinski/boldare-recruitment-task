import dayjs from "dayjs";
import { Person } from "./types";

export default function sortPeople(people: Person[], sortProp: string) {
  let sorted: Person[] = [...people].sort((a, b) => {
    if (
      sortProp === "firstName" ||
      sortProp === "lastName" ||
      sortProp === "function"
    ) {
      let valA: string = a[sortProp].toUpperCase();
      let valB: string = b[sortProp].toUpperCase();

      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      return 0;
    } else if (sortProp === "experienceAscending") {
      return (a.experience as number) - (b.experience as number);
    } else if (sortProp === "experienceDescending") {
      return (b.experience as number) - (a.experience as number);
    } else if (sortProp === "dateOfBirthAscending") {
      let dateA = dayjs(a.dateOfBirth, "D-M-YYYY HH:mm");
      let dateB = dayjs(b.dateOfBirth, "D-M-YYYY HH:mm");
      return dateA.valueOf() - dateB.valueOf();
    } else if (sortProp === "dateOfBirthDescending") {
      let dateA = dayjs(a.dateOfBirth, "D-M-YYYY HH:mm");
      let dateB = dayjs(b.dateOfBirth, "D-M-YYYY HH:mm");
      return dateB.valueOf() - dateA.valueOf();
    }
    return 0;
  });

  //make people without experience appear in proper order when sorting by experience
  if (
    sortProp === "experienceAscending" ||
    sortProp === "experienceDescending"
  ) {
    let noExperienceArr: Person[] = sorted.filter((person: Person) => {
      if (person.experience == undefined) return true;
    });
    let properArr: Person[] = sorted.filter((person: Person) => {
      if (person.experience == undefined) {
        return false;
      } else return true;
    });
    for (let i = 0; i < noExperienceArr.length; i++) {
      if (sortProp === "experienceAscending") {
        properArr.unshift(noExperienceArr[i]);
      } else {
        properArr.push(noExperienceArr[i]);
      }
    }
    sorted = properArr;
  }

  return sorted;
}
