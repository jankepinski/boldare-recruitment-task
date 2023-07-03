import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { Option } from "@/helpers/customTypes";

interface SelectorArguments {
  options: Option[];
  controlledValue: number | string;
  valueSetter: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  width: string;
  maxWidth: string;
}

export const Selector = ({options, controlledValue, valueSetter, label, width, maxWidth}: SelectorArguments) => {
  return (
      <Box sx={{ maxWidth: maxWidth, width: width }} marginTop="1vh">
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
