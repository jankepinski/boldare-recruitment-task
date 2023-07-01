import dayjs from "dayjs";

export default function useFilter({people, filter, filterDate}){
    return people.filter((person) => {
      let idBool = true;
      let expBool = true;
      let dateBool = true;

      if (filterDate != null) {
        if (
          dayjs(filterDate).format("DD.MM.YYYY") ===
          dayjs(person.dateOfBirth.split(" ")[0], "D.M.YYYY").format(
            "DD.MM.YYYY"
          )
        ) {
          dateBool = true;
        } else dateBool = false;
      }

      if (filter.id != "") {
        idBool = filter.id === person.id.toString();
      } else {
        idBool = true;
      }

      if (filter.experience != "" && person.experience === undefined) {
        expBool = false;
      } else if (filter.experience != "") {
        expBool = filter.experience === person.experience.toString();
      } else {
        expBool = true;
      }
      return (
        person.firstName.slice(0, filter.firstName.length).toUpperCase() ===
          filter.firstName.toUpperCase() &&
        person.lastName.slice(0, filter.lastName.length).toUpperCase() ===
          filter.lastName.toUpperCase() &&
        person.function.slice(0, filter.function.length).toUpperCase() ===
          filter.function.toUpperCase() &&
        idBool &&
        expBool &&
        dateBool
      );
    });
  };