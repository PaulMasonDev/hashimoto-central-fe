import { SearchBox } from "./SearchBox";
import { Grid, Typography } from "@material-ui/core";
import { RecipeDisplay } from "./RecipeDisplay";
import { CondensedRecipe } from "./CondensedRecipe";
import { useSelector } from "react-redux";

//TODO:
//ADD CREDIT BANNERS DEPENDING ON THE WEBSITE IT IS PULLED FROM,
//ADD FILTERS FOR WEBSITES ON SEARCH. IMPLEMENT MORE THAN ONE PAGE OF RESULTS.
export const Main = () => {
  const { condensedRecipe } = useSelector((state) => state.recipe);
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Hashimotos Central</Typography>
        {/* TODO:NEED TO FIX THIS DISPLAY */}
        {Object.keys(condensedRecipe).length > 0 && (
          <CondensedRecipe link={condensedRecipe} />
        )}
      </Grid>
      <Grid item>
        <SearchBox />
      </Grid>
      <Grid item>
        <RecipeDisplay />
      </Grid>
    </Grid>
  );
};
