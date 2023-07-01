import React from "react";
import {
    Select,
    MenuItem,
    Typography,
    FormControl,
    InputLabel,
    Box,
  } from "@mui/material";


export const SortingTypeSelect = ({setSortType}) => {
  return (
    <div>
      <Box sx={{ maxWidth: "15vw" }}>
        <Typography>Sort by:</Typography>
        <FormControl fullWidth>
          <InputLabel></InputLabel>
          <Select
            name="sort"
            id="sort"
            onChange={(event) => setSortType(event.target.value)}
          >
            <MenuItem value="firstName">First Name (Alphabetically)</MenuItem>
            <MenuItem value="lastName">Last Name (Alphabetically)</MenuItem>
            <MenuItem value="function">Function (Alphabetically)</MenuItem>
            <MenuItem value="experienceAscending">
              Experience (Ascending)
            </MenuItem>
            <MenuItem value="experienceDescending">
              Experience (Descending)
            </MenuItem>
            <MenuItem value="dateOfBirth">Date Of Birth</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
