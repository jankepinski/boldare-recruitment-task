"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { FiltersInput } from "@/components/FiltersInput";
import { Selector } from "@/components/Selector";
import sortPeople from "@/helpers/sortPeople";
import filterPeople from "@/helpers/filterPeople";
import { PeopleTable } from "@/components/PeopleTable";
import { Pagination } from "@/components/Pagination";
import { Filter, Option, Person } from "@/helpers/types";
import { Box } from "@mui/material";

const sortingOptions: Option[] = [
  { value: "firstName", label: "First Name (Alphabetically)" },
  { value: "lastName", label: "Last Name (Alphabetically)" },
  { value: "function", label: "Function (Alphabetically)" },
  { value: "experienceAscending", label: "Experience (Ascending)" },
  { value: "experienceDescending", label: "Experience (Descending)" },
  { value: "dateOfBirthAscending", label: "Birth Date (Ascending)" },
  { value: "dateOfBirthDescending", label: "Birth Date (Descending)" },
];

const paginationOptions: Option[] = [
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "7", label: "7" },
  { value: "10", label: "10" },
];

export default function App() {
  const [people, setPeople] = useState<Person[] | undefined>();
  const [displayPeople, setDisplayPeople] = useState<Person[] | undefined>();
  const [peoplePerPage, setPeoplePerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sortType, setSortType] = useState<string>("");
  const [filter, setFilter] = useState<Filter>({
    firstName: "",
    lastName: "",
    id: null,
    experienceMin: null,
    experienceMax: null,
    function: "",
    dateOfBirthMin: null,
    dateOfBirthMax: null,
  });

  //request json of all people
  useEffect(() => {
    const getPeople = async () => {
      const res = await axios.get("data/sluzba.json");
      setPeople(res.data as Person[]);
    };
    getPeople();
  }, [setPeople]);

  //set DisplayPeople
  useEffect(() => {
    if (people != undefined) {
      setDisplayPeople(people);
    }
  }, [people, setDisplayPeople]);

  //sort and filter the array of people whenever sort type and filter changes
  useEffect(() => {
    if (people !== undefined) {
      setDisplayPeople(filterPeople(sortPeople(people, sortType), filter));
    }
  }, [sortType, people, setDisplayPeople, filter]);

  //reset page to first whenever the view changes
  useEffect(() => {
    setPage(1);
  }, [sortType, filter, peoplePerPage]);

  return (
    <Box display="flex" justifyContent="center" gap="1vw">
      <FiltersInput filter={filter} setFilter={setFilter} setPage={setPage} />
      <Box display="flex" width="30vw" flexDirection="column">
        <Box display="flex">
          <Selector
            label="Sort By:"
            options={sortingOptions}
            controlledValue={sortType}
            valueSetter={setSortType}
          />
          <Selector
            label="People Per Page"
            options={paginationOptions}
            controlledValue={peoplePerPage}
            valueSetter={setPeoplePerPage}
          />
        </Box>
        {displayPeople === undefined ? (
          <Box />
        ) : (
          <Box>
            <PeopleTable
              page={page}
              peoplePerPage={peoplePerPage}
              people={displayPeople}
              setPage={setPage}
            />
            <Pagination
              itemCount={displayPeople.length}
              itemsPerPage={peoplePerPage}
              setPage={setPage}
              page={page}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
