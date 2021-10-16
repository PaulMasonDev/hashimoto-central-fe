import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { Grid, Typography } from "@material-ui/core";
import { RecipeDisplay } from "./RecipeDisplay";

//TODO: NEXT STEP NEED TO MAKE SURE FE CONNEXTS TO BE
export const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Hashimotos Central</Typography>
      </Grid>
      <Grid item>
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setRecipeArray={setRecipeArray}
          setIsSearching={setIsSearching}
        />
      </Grid>
      <Grid item>
        <RecipeDisplay
          searchTerm={searchTerm}
          recipeArray={recipeArray}
          isSearching={isSearching}
        />
      </Grid>
    </Grid>
  );
};
