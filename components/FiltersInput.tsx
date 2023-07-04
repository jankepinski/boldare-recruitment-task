import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Filter } from "@/helpers/types";

interface FiltersInputArguments {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const fullWidthStyle = {
  marginTop: "1vh",
  width: "100%",
};

const halfWidthStyle = {
  marginTop: "1vh",
  width: "50%",
};

export const FiltersInput = ({
  filter,
  setFilter,
  setPage,
}: FiltersInputArguments) => {
  return (
    <Box width="30vw">
      <TextField
        sx={fullWidthStyle}
        type="text"
        label="First Name"
        value={filter.firstName}
        onChange={(e) => {
          setFilter({ ...filter, firstName: e.target.value });
          setPage(1);
        }}
      />
      <TextField
        sx={fullWidthStyle}
        type="text"
        label="Last Name"
        value={filter.lastName}
        onChange={(e) => {
          setFilter({ ...filter, lastName: e.target.value });
          setPage(1);
        }}
      />
      <TextField
        sx={fullWidthStyle}
        type="text"
        label="Function"
        value={filter.function}
        onChange={(e) => {
          setFilter({ ...filter, function: e.target.value });
          setPage(1);
        }}
      />
      <TextField
        sx={fullWidthStyle}
        type="number"
        inputProps={{ min: 0 }}
        label="ID"
        value={filter.id ?? ""}
        onChange={(e) => {
          setFilter({
            ...filter,
            id: e.target.value === "" ? null : parseInt(e.target.value),
          });
          setPage(1);
        }}
      />
      <TextField
        sx={halfWidthStyle}
        type="number"
        inputProps={{ min: 0 }}
        label="Experience Min"
        value={filter.experienceMin ?? ""}
        onChange={(e) => {
          setFilter({
            ...filter,
            experienceMin:
              e.target.value === "" ? null : parseInt(e.target.value),
          });
          setPage(1);
        }}
      />
      <TextField
        sx={halfWidthStyle}
        type="number"
        inputProps={{ min: 0 }}
        label="Experience Max"
        value={filter.experienceMax ?? ""}
        onChange={(e) => {
          setFilter({
            ...filter,
            experienceMax:
              e.target.value === "" ? null : parseInt(e.target.value),
          });
          setPage(1);
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { sx: halfWidthStyle } }}
          label="Birth Date Min"
          value={filter.dateOfBirthMin}
          onChange={(newDate) => {
            setFilter({ ...filter, dateOfBirthMin: dayjs(newDate) });
            setPage(1);
          }}
          format="DD/MM/YYYY"
        />
        <DatePicker
          slotProps={{ textField: { sx: halfWidthStyle } }}
          label="Birth Date Max"
          value={filter.dateOfBirthMax}
          onChange={(newDate) => {
            setFilter({ ...filter, dateOfBirthMax: dayjs(newDate) });
            setPage(1);
          }}
          format="DD/MM/YYYY"
        />
      </LocalizationProvider>
      <Button
        sx={fullWidthStyle}
        variant="contained"
        onClick={() =>
          setFilter({ ...filter, dateOfBirthMin: null, dateOfBirthMax: null })
        }
      >
        clear date
      </Button>
      <Button
        sx={fullWidthStyle}
        variant="contained"
        onClick={() =>
          setFilter({
            firstName: "",
            lastName: "",
            id: null,
            experienceMin: null,
            experienceMax: null,
            function: "",
            dateOfBirthMin: null,
            dateOfBirthMax: null,
          })
        }
        color="secondary"
      >
        clear filters
      </Button>
    </Box>
  );
};
