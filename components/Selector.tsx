import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { Option } from "@/helpers/types";

interface SelectorArguments {
  options: Option[];
  controlledValue: number | string;
  valueSetter: React.Dispatch<React.SetStateAction<any>>;
  label: string;
}

export const Selector = ({
  options,
  controlledValue,
  valueSetter,
  label,
}: SelectorArguments) => {
  return (
    <Box maxWidth="15vw" width="100%" marginTop="1vh">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          value={controlledValue}
          onChange={(event) => {
            valueSetter(event.target.value);
          }}
        >
          {options.map((option: Option, i: number) => (
            <MenuItem value={option.value} key={i}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
