import React from "react";
import paginate from "@/helpers/paginate";
import { Person } from "@/helpers/types";
import {
  Paper,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import dayjs from "dayjs";

interface PeopleTableArguments {
  page: number;
  peoplePerPage: number;
  people: Person[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PeopleTable = ({
  page,
  peoplePerPage,
  people,
}: PeopleTableArguments) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Function</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="right">Birth Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginate(people, page, peoplePerPage).map((person: Person) => (
              <TableRow
                key={person.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${person.firstName} ${person.lastName}`}
                </TableCell>
                <TableCell align="right">{person.function}</TableCell>
                <TableCell align="right">
                  {person.experience === undefined ? "none" : person.experience}
                </TableCell>
                <TableCell align="right">
                  {dayjs(person.dateOfBirth, "D-M-YYYY HH:mm").format(
                    "DD.MM.YYYY HH:mm"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
