import React from "react";
import {TextField, Button, Typography} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const FiltersInput = ({filter, setFilter, setPage, filterDate, setFilterDate}) => {
  return (
    <div>
    <Typography>Filter by:</Typography>
      <TextField
        label="First Name"
        onChange={(e) => {
          setFilter({ ...filter, firstName: e.target.value });
          setPage(1);
        }}
      ></TextField>
      <TextField
        label="Last Name"
        onChange={(e) => {
          setFilter({ ...filter, lastName: e.target.value });
          setPage(1);
        }}
      ></TextField>
      <TextField
        label="Function"
        onChange={(e) => {
          setFilter({ ...filter, function: e.target.value });
          setPage(1);
        }}
      ></TextField>
      <TextField
        label="Experience"
        onChange={(e) => {
          setFilter({ ...filter, experience: e.target.value });
          setPage(1);
        }}
      ></TextField>
      <TextField
        label="ID"
        onChange={(e) => {
          setFilter({ ...filter, id: e.target.value });
          setPage(1);
        }}
      ></TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date Of Birth"
          value={filterDate}
          onChange={(newDate) => {
            setFilterDate(newDate);
            setPage(1);
          }}
          format="DD/MM/YYYY"
        />
        <Button variant="contained" onClick={() => setFilterDate(null)}>
          clear date
        </Button>
      </LocalizationProvider>
    </div>
  );
};
