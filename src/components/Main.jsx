import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { Grid, Typography } from "@material-ui/core";
import { RecipeDisplay } from "./RecipeDisplay";

//TODO: SETUP NEW URL FOR API CALLS AS A CONSTANT, CHANGE BUTTONS TO BE MORE MODERN VARIANT
//CREATE CONDESED RECIPE PAGE, ADD CREDIT BANNERS DEPENDING ON THE WEBSITE IT IS PULLED FROM,
//ADD FILTERS FOR WEBSITES ON SEARCH. IMPLEMENT TYPESCRIPT
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
