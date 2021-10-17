import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RecipeCard } from "./RecipeCard";

export const RecipeDisplay = (props) => {
  return (
    <Grid item container>
      <Grid item>
        {props.isSearching ? (
          <CircularProgress align="center" color="primary" />
        ) : props.recipeArray.length > 0 ? (
          <Typography variant="body1">
            Results for: {props.searchTerm}
          </Typography>
        ) : null}
      </Grid>
      <Grid item container xs={12}>
        {props.recipeArray.map((recipe) => {
          const recipeName = recipe.name.toLowerCase();
          if (
            !recipeName.includes("recipes") &&
            !recipeName.includes("roundup") &&
            !recipeName.includes("plan") &&
            !recipeName.includes("resources")
          ) {
            console.log({ props });
            return (
              <RecipeCard
                name={recipe.name}
                link={recipe.link}
                imgSrc={recipe.imgSrc}
              />
            );
          }
          return null;
        })}
      </Grid>
    </Grid>
  );
};
