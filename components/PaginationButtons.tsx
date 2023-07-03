import React from "react";
import { ButtonGroup, Button } from "@mui/material";

interface PaginationButtonsArguments{
  itemCount: number;
  itemsPerPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const PaginationButtons = ({ itemCount, itemsPerPage, setPage }: PaginationButtonsArguments) => {
  let pageCount = Math.ceil(itemCount / itemsPerPage);

  return (
    <div style={{float: "right"}}>
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
