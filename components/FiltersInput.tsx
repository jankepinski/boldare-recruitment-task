import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Filter, FilterPerson } from "@/helpers/customTypes";

interface FiltersInputArguments {
  filter: FilterPerson;
  setFilter: React.Dispatch<React.SetStateAction<FilterPerson>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filters: Filter[];
}

export const FiltersInput = ({
  filter,
  setFilter,
  setPage,
  filters,
}: FiltersInputArguments) => {
  return (
    <div style={{ width: "30vw" }}>
      <Typography>Filter by:</Typography>
      {filters.map((f: Filter, i: number) => {
        return (
          <TextField
            sx={{
              marginTop: "1vh",
              width:
                f.property === "experienceMin" || f.property === "experienceMax"
                  ? "50%"
                  : "100%",
            }}
            type={
              f.property === "experienceMin" ||
              f.property === "experienceMax" ||
              f.property === "id"
                ? "number"
                : "text"
            }
            inputProps={{ min: 0, max: 12 }}
            key={i}
            label={f.label}
            value={filter[f.property]}
            onChange={(e) => {
              setFilter({ ...filter, [f.property]: e.target.value });
              setPage(1);
            }}
          />
        );
      })}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { sx: { marginTop: "1vh", width: "50%" } } }}
          label="Birth Date Min"
          value={filter.dateOfBirthMin}
          onChange={(newDate) => {
            setFilter({ ...filter, dateOfBirthMin: dayjs(newDate) });
            setPage(1);
          }}
          format="DD/MM/YYYY"
        />
        <DatePicker
          slotProps={{ textField: { sx: { marginTop: "1vh", width: "50%" } } }}
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
        sx={{ marginTop: "1vh", width: "100%" }}
        variant="contained"
        onClick={() =>
          setFilter({ ...filter, dateOfBirthMin: null, dateOfBirthMax: null })
        }
      >
        clear date
      </Button>
      <Button
        sx={{ marginTop: "1vh", width: "100%" }}
        variant="contained"
        onClick={() =>
          setFilter({
            firstName: "",
            lastName: "",
            id: "",
            experienceMin: "",
            experienceMax: "",
            function: "",
            dateOfBirthMin: null,
            dateOfBirthMax: null,
          })
        }
        color="secondary"
      >
        clear filters
      </Button>
    </div>
  );
};
