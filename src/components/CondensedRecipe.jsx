import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "./Constants";

export const CondensedRecipe = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const testAPI = async () => {
    const response = await axios.put(`${BASE_URL}/generateCondensedRecipe`, {
      link: props.link,
    });
    console.log(response.data);
    setIngredients(response.data.ingredientsArr);
    setInstructions(response.data.instructionsArr);
  };
  return (
    <>
      <Typography variant="body1">{props.link}</Typography>
      <Button onClick={testAPI}>TEST</Button>
      <ul>
        {ingredients?.length > 0 &&
          ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
      </ul>
      <ol>
        {instructions?.length > 0 &&
          instructions.map((instruction) => {
            return <li key={instruction}>{instruction}</li>;
          })}
      </ol>
    </>
  );
};
