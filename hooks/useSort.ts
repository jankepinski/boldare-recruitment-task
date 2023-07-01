export default function useSort (people, sortType) {
    const sortPeople = [...people];
    sortPeople.sort((a, b) => {
      if (
        sortType === "firstName" ||
        sortType === "lastName" ||
        sortType === "function"
      ) {
        let valA = "";
        let valB = "";

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
            console.log("no name type defined");
        }

        if (valA < valB) {
          return -1;
        }
        if (valA > valB) {
          return 1;
        }
        return 0;
      } else if (sortType === "experienceAscending") {
        return a.experience - b.experience;
      } else if (sortType === "experienceDescending") {
        return b.experience - a.experience;
      } else if (sortType === "dateOfBirth") {
        let [dayA, monthA, yearA] = a.dateOfBirth.split(" ")[0].split(".");
        let [hourA, minuteA] = a.dateOfBirth.split(" ")[1].split(":");
        let [dayB, monthB, yearB] = b.dateOfBirth.split(" ")[0].split(".");
        let [hourB, minuteB] = b.dateOfBirth.split(" ")[1].split(":");
        let dateA = new Date(yearA, monthA, dayA, hourA, minuteA);
        let dateB = new Date(yearB, monthB, dayB, hourB, minuteB);
        return dateA.getTime() - dateB.getTime();
      }
    });
    return sortPeople;
  };