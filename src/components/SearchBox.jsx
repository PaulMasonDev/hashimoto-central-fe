import { Button, Grid, TextField } from "@material-ui/core";
import {
  setSearchTerm,
  getRecipeData,
  resetRecipeResults,
} from "../redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromHealMeDelicious } from "../API/healMeDelicious";

export const SearchBox = () => {
  const { searchTerm, recipeArray } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  return (
    <Grid item container spacing={2} direction="column">
      <Grid item container justifyContent="center">
        <TextField
          variant="outlined"
          value={searchTerm}
          placeholder="Search ingredients..."
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
          onClick={() => dispatch(resetRecipeResults())}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};
