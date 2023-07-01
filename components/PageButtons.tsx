import React from "react";
import { ButtonGroup, Button, Typography } from "@mui/material";

export const PageButtons = ({ peopleCount, peoplePerPage, setPage }) => {
  let pageCount = Math.ceil(peopleCount / peoplePerPage);

  return (
    <div>
      <Typography>Page:</Typography>
      <ButtonGroup>
        {(() => {
          let btnArr = [];
          for (let i = 1; i <= pageCount; i++) {
            btnArr.push(
              <Button key={"btn" + i} onClick={() => setPage(i)}>
                {i}
              </Button>
            );
          }
          return btnArr;
        })()}
      </ButtonGroup>
    </div>
  );
};
