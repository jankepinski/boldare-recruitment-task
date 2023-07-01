import React from "react";
import {
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

export const PeoplePerPageSelect = ({peoplePerPage, setPeoplePerPage}) => {
  return (
    <div>
      <Typography>People Per Page:</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={peoplePerPage}
        label="People Per Page"
        onChange={(e) => setPeoplePerPage(e.target.value)}
      >
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </div>
  );
};
