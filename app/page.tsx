"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { FiltersInput } from "@/components/FiltersInput";
import { Selector } from "@/components/Selector";
import sortPeople from "@/helpers/sortPeople";
import filterPeople from "@/helpers/filterPeople";
import { Pagination } from "@/components/Pagination";
import _sortingOptions from "@/settings/sorting-options.json";
import _paginationOptions from "@/settings/pagination-options.json";
import { Filter, FilterPerson, Option, Person } from "@/helpers/customTypes";
import _filters from "@/settings/filters.json";

const sortingOptions = _sortingOptions as Option[];
const paginationOptions = _paginationOptions as Option[];
const filters = _filters as Filter[];

export default function App() {
  const [people, setPeople] = useState<Person[] | undefined>();
  const [peoplePerPage, setPeoplePerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sortType, setSortType] = useState<string>("");
  const [filter, setFilter] = useState<FilterPerson>({
    firstName: "",
    lastName: "",
    id: "",
    experienceMin: "",
    experienceMax: "",
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
  }, []);

  //sort the array of people whenever sort type changes
  useEffect(() => {
    if (people !== undefined) {
      setPeople(sortPeople(people, sortType));
    }
  }, [sortType]);

  //reset page to first whenever the view changes
  useEffect(() => {
    setPage(1);
  }, [sortType, filter, peoplePerPage]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1vw",
      }}>
        <FiltersInput
          filter={filter}
          setFilter={setFilter}
          setPage={setPage}
          filters={filters}
        />
        <div
          style={{
            width: "30vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Selector
              width="100%"
              maxWidth="15vw"
              label="Sort By:"
              options={sortingOptions}
              controlledValue={sortType}
              valueSetter={setSortType}
            />
            <Selector
              width="100%"
              maxWidth="15vw"
              label="People Per Page"
              options={paginationOptions}
              controlledValue={peoplePerPage}
              valueSetter={setPeoplePerPage}
            />
          </div>
          {people === undefined ? (
            <div />
          ) : (
            <Pagination
              page={page}
              itemsPerPage={peoplePerPage}
              itemsToPaginate={filterPeople(people, filter)}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
