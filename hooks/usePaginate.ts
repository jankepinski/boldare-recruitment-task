import useFilter from "./useFilter";

export default function usePaginate ({page, peoplePerPage, peopleToPaginate}) {
    let firstPersonIndex = page * peoplePerPage - peoplePerPage;
    let lastPersonIndex = page * peoplePerPage;
    return peopleToPaginate.slice(firstPersonIndex, lastPersonIndex);
  };