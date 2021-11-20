import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
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
  const { name, imgSrc, ingredients, instructions } = useSelector(
    (state) => state.recipe.condensedRecipe
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getIngredientsAndInstructions(generateCondensedRecipeForHealMeDelicious)
    );
  }, [dispatch, condensedRecipe.link]);

  return (
    <Grid container direction="column">
      <Grid item>
        <button
          onClick={() => dispatch(setCondensedRecipe({ isLoading: false }))}
        >
          Back
        </button>
      </Grid>
      <Grid container item direction="row">
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Card>
            <CardContent>
              <List>
                {ingredients?.length > 0 &&
                  ingredients.map((ingredient) => {
                    return (
                      <ListItem key={ingredient}>
                        <Typography variant="body1">{ingredient}</Typography>
                      </ListItem>
                    );
                  })}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Card>
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
  );
};
