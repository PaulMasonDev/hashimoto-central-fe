import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

export const CondensedRecipeContent = React.forwardRef((props, ref) => {
  const { name, imgSrc, ingredients, instructions } = useSelector(
    (state) => state.recipe.condensedRecipe
  );
  return (
    <Grid container item direction="row" spacing={2} ref={ref}>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h2">{name}</Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        <Card>
          <CardHeader title="Ingredients" />
          <CardContent>
            <ul>
              {ingredients?.length > 0 &&
                ingredients.map((ingredient) => {
                  return (
                    <li key={ingredient}>
                      <Typography variant="body1" align="left">
                        {ingredient}
                      </Typography>
                    </li>
                  );
                })}
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        <Card>
          <CardHeader title="Instructions" />
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={imgSrc}
            alt={name}
          />
          <CardContent>
            <ol>
              {instructions?.length > 0 &&
                instructions.map((instruction) => {
                  return (
                    <li key={instruction}>
                      <Typography align="left" variant="body1">
                        {instruction}
                      </Typography>
                    </li>
                  );
                })}
            </ol>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});
