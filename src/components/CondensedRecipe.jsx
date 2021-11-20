import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getIngredientsAndInstructions,
  setCondensedRecipe,
} from "../redux/recipeSlice";
import { generateCondensedRecipeForHealMeDelicious } from "../API/healMeDelicious";

export const CondensedRecipe = () => {
  const { condensedRecipe } = useSelector((state) => state.recipe);
  const { name, imgSrc, ingredients, instructions, isLoading } = useSelector(
    (state) => state.recipe.condensedRecipe
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getIngredientsAndInstructions(generateCondensedRecipeForHealMeDelicious)
    );
  }, [dispatch, condensedRecipe.link]);

  return (
    <>
      {!isLoading ? (
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(setCondensedRecipe({ isLoading: false }))}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h2">{name}</Typography>
          </Grid>
          <Grid container item direction="row" spacing={2}>
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
        </Grid>
      ) : (
        <Typography variant="h2">
          <CircularProgress />
        </Typography>
      )}
    </>
  );
};
