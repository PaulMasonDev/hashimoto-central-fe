import { Button, Grid, TextField } from "@material-ui/core";
import {
  setSearchTerm,
  getRecipeData,
  resetRecipeResults,
} from "../redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromHealMeDelicious } from "../API/healMeDelicious";

export const SearchBox = () => {
  const { searchTerm, isRecipeResults } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setSearchTerm(value));
    if (isRecipeResults) {
      dispatch(resetRecipeResults());
    }
  };
  const handleReset = () => {
    dispatch(resetRecipeResults());
  };

  return (
    <Grid item container spacing={2} direction="column">
      <Grid item container justifyContent="center">
        <TextField
          variant="outlined"
          value={searchTerm}
          placeholder="Search ingredients..."
          onChange={(e) => handleChange(e.target.value)}
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
          disabled={searchTerm === ""}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};
