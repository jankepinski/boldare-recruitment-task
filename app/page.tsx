"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { PageButtons } from "@/components/PageButtons";
import { FiltersInput } from "@/components/FiltersInput";
import { SortingTypeSelect } from "@/components/SortingTypeSelect";
import { PeoplePerPageSelect } from "@/components/PeoplePerPageSelect";
import useSort from "@/hooks/useSort";
import useFilter from "@/hooks/useFilter";
import usePaginate from "@/hooks/usePaginate";
import { People } from "@/components/People";

export default function Home() {
  const [people, setPeople] = useState([]);
  const [filterDate, setFilterDate] = useState(null);
  const [peoplePerPage, setPeoplePerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState(null);
  const [filter, setFilter] = useState({
    firstName: "",
    lastName: "",
    id: "",
    experience: "",
    function: "",
  });

  useEffect(() => {
    const getPeople = async () => {
      const res = await axios.get("data/sluzba.json");
      setPeople(res.data);
    };
    getPeople();
  }, []);

  useEffect(() => {
    setPeople(useSort(people, sortType));
  }, [sortType]);

  return (
    <div>
      <FiltersInput
        filter={filter}
        setFilter={setFilter}
        setPage={setPage}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <SortingTypeSelect setSortType={setSortType} />
      <PeoplePerPageSelect
        peoplePerPage={peoplePerPage}
        setPeoplePerPage={setPeoplePerPage}
      />
      <People people={people} page={page} peoplePerPage={peoplePerPage} filter={filter} filterDate={filterDate}/>
      <PageButtons
        peopleCount={
          useFilter({ people: people, filter: filter, filterDate: filterDate })
            .length
        }
        peoplePerPage={peoplePerPage}
        setPage={setPage}
      />
    </div>
  );
}
