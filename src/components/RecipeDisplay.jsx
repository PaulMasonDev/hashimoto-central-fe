import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";

export const RecipeDisplay = (props) => {
  const { searchTerm, isSearching, recipeArray } = useSelector(
    (state) => state.recipe
  );

  return (
    <Grid item container>
      <Grid item>
        {isSearching && <CircularProgress align="center" color="primary" />}
        {recipeArray.length > 0 && (
          <Typography variant="body1">Results for: {searchTerm}</Typography>
        )}
      </Grid>
      {recipeArray && (
        <Grid item container xs={12}>
          {recipeArray.length > 0 ? (
            recipeArray.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.name}
                  name={recipe.name}
                  link={recipe.link}
                  imgSrc={recipe.imgSrc}
                />
              );
            })
          ) : (
            <Typography variant="body1">NO RESULTS FOUND</Typography>
          )}
        </Grid>
      )}
    </Grid>
  );
};
