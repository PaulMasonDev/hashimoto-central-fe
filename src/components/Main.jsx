import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { Grid, Typography } from "@material-ui/core";
import { RecipeDisplay } from "./RecipeDisplay";
import { CondensedRecipe } from "./CondensedRecipe";

//TODO:
//ADD CREDIT BANNERS DEPENDING ON THE WEBSITE IT IS PULLED FROM,
//ADD FILTERS FOR WEBSITES ON SEARCH. IMPLEMENT MORE THAN ONE PAGE OF RESULTS.
export const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [condensedRecipe, setCondensedRecipe] = useState("");

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Hashimotos Central</Typography>
        {condensedRecipe && <CondensedRecipe link={condensedRecipe} />}
      </Grid>
      {!condensedRecipe && (
        <>
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
              setCondensedRecipe={setCondensedRecipe}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};
