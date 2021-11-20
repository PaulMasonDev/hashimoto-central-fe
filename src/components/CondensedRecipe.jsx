import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getIngredientsAndInstructions,
  setCondensedRecipe,
} from "../redux/recipeSlice";
import { generateCondensedRecipeForHealMeDelicious } from "../API/healMeDelicious";
import { PrintRecipe } from "./PrintRecipe";

export const CondensedRecipe = () => {
  const [isPrintRecipeOpen, setIsPrintRecipeOpen] = useState(false);
  const { condensedRecipe } = useSelector((state) => state.recipe);
  const { isLoading } = useSelector((state) => state.recipe.condensedRecipe);

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
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsPrintRecipeOpen(true)}
            >
              Print
            </Button> */}

            <PrintRecipe
              open={isPrintRecipeOpen}
              close={() => setIsPrintRecipeOpen(false)}
            />
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
