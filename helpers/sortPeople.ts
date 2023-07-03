import dayjs from "dayjs";
import { Person } from "./customTypes";

export default function sortPeople(people: Person[], sortType: string) {
  let sorted: Person[] = [...people].sort((a, b) => {
    if (
      sortType === "firstName" ||
      sortType === "lastName" ||
      sortType === "function"
    ) {
      let valA: string = "";
      let valB: string = "";

      switch (sortType) {
        case "firstName":
          valA = a.firstName.toUpperCase();
          valB = b.firstName.toUpperCase();
          break;
        case "lastName":
          valA = a.lastName.toUpperCase();
          valB = b.lastName.toUpperCase();
          break;
        case "function":
          valA = a.function.toUpperCase();
          valB = b.function.toUpperCase();
          break;
        default:
          break;
      }

      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      return 0;
    } else if (sortType === "experienceAscending") {
      return (a.experience as number) - (b.experience as number);
    } else if (sortType === "experienceDescending") {
      return (b.experience as number) - (a.experience as number);
    } else if (sortType === "dateOfBirthAscending") {
      let dateA = dayjs(a.dateOfBirth, "D-M-YYYY HH:mm");
      let dateB = dayjs(b.dateOfBirth, "D-M-YYYY HH:mm");
      return dateA.valueOf() - dateB.valueOf();
    } else if (sortType === "dateOfBirthDescending") {
      let dateA = dayjs(a.dateOfBirth, "D-M-YYYY HH:mm");
      let dateB = dayjs(b.dateOfBirth, "D-M-YYYY HH:mm");
      return dateB.valueOf() - dateA.valueOf();
    }
    return 0;
  });

  //make people without experience appear in proper order when sorting by experience
  if (sortType === "experienceAscending" || sortType === "experienceDescending") {
    let noExperienceArr: Person[] = sorted.filter((person: Person) => {
      if (person.experience == undefined) return true;
    });
    let properArr: Person[] = sorted.filter((person: Person) => {
      if (person.experience == undefined){
        return false
      } else return true;
    })
    for (let i = 0; i < noExperienceArr.length; i++) {
      if(sortType === "experienceAscending"){
        properArr.unshift(noExperienceArr[i])
      } else{
        properArr.push(noExperienceArr[i])
      }
    }
    sorted = properArr;
  }

  return sorted;
}
