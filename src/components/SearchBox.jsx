import { Button, Grid, TextField } from "@material-ui/core";
import {
  setSearchTerm,
  setRecipeArray,
  getRecipeData,
} from "../redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromHealMeDelicious } from "../API/healMeDelicious";

export const SearchBox = () => {
  const { searchTerm, recipeArray } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setSearchTerm(""));
    dispatch(setRecipeArray([]));
    //TODO: ADD FOCUS ON INPUT HERE
  };

  return (
    <Grid item container spacing={2} direction="column">
      <Grid item container justifyContent="center">
        <TextField
          variant="outlined"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(getRecipeData(getDataFromHealMeDelicious))}
          disabled={!searchTerm}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={recipeArray.length === 0}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};
