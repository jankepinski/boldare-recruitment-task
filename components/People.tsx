import React from "react";
import usePaginate from "@/hooks/usePaginate";
import useFilter from "@/hooks/useFilter";

export const People = ({people, page, peoplePerPage, filter, filterDate}) => {
  return (
    <div>
      {people.length === 0 ? (
        <div>fetching data</div>
      ) : (
        <div>
          {usePaginate({
            page: page,
            peoplePerPage: peoplePerPage,
            peopleToPaginate: useFilter({
              people: people,
              filter: filter,
              filterDate: filterDate,
            }),
          }).map((person) => (
            <div
              key={person.id}
            >{`Imie: ${person.firstName} nazwisko: ${person.lastName} funkcja: ${person.function} doswiadczenie: ${person.experience} data urodzenia: ${person.dateOfBirth}`}</div>
          ))}
        </div>
      )}
    </div>
  );
};
