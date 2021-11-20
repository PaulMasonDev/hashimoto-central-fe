import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { CondensedRecipeContent } from "./CondensedRecipeContent";
import { Button } from "@material-ui/core";

export const PrintRecipe = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button variant="contained" color="secondary">
            Print Recipe
          </Button>
        )}
        content={() => componentRef.current}
      />
      <CondensedRecipeContent ref={componentRef} />
    </div>
  );
};
