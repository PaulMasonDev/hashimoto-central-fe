import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "./Constants";

export const SearchBox = (props) => {
  const getData = async () => {
    props.setIsSearching(true);
    const response = await axios.get(
      `${BASE_URL}/getLinkList/${props.searchTerm}`
    );
    props.setRecipeArray(response.data);
    props.setIsSearching(false);
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm === "") props.setRecipeArray([]);
    props.setSearchTerm(e.target.value);
  };

  return (
    <Grid item container spacing={2} direction="column">
      <Grid item container justifyContent="center">
        <TextField
          variant="outlined"
          value={props.searchTerm}
          onChange={(e) => handleChange(e)}
        ></TextField>
        <Button variant="contained" color="primary" onClick={getData}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
