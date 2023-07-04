import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface PaginationArguments {
  itemCount: number;
  itemsPerPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

export const Pagination = ({
  itemCount,
  itemsPerPage,
  setPage,
  page,
}: PaginationArguments) => {
  let pageCount = Math.ceil(itemCount / itemsPerPage);

  return (
    <div style={{ float: "right" }}>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={page}
        onChange={(event: React.MouseEvent<HTMLElement>, value: number) => {
          setPage(value ?? page);
        }}
      >
        {new Array(pageCount).fill(0).map((_, i: number) => (
          <ToggleButton key={i + 1} value={i + 1}>
            {i + 1}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
