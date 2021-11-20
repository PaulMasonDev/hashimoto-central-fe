import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";

export const RecipeDisplay = (props) => {
  const { searchTerm, isSearching, recipeArray, isRecipeResults } = useSelector(
    (state) => state.recipe
  );

  return (
    <Grid item container direction="column" spacing={2}>
      <Grid item>
        {isSearching && (
          <Typography variant="h1">
            <CircularProgress />
          </Typography>
        )}
        {isRecipeResults && (
          <Typography variant="body1">Results for: {searchTerm}</Typography>
        )}
      </Grid>
      <Grid item container xs={12}>
        {recipeArray.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.name}
              name={recipe.name}
              link={recipe.link}
              imgSrc={recipe.imgSrc}
              sourceName={recipe.sourceName}
              sourceUrl={recipe.sourceUrl}
            />
          );
        })}
      </Grid>
      {isRecipeResults && recipeArray.length === 0 && !isSearching && (
        <Typography variant="h4" align="center">
          No results found. Please search again.
        </Typography>
      )}
    </Grid>
  );
};
