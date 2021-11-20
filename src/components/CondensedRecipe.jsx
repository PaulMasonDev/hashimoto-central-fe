import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "./Constants";

export const CondensedRecipe = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  console.log({ props });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.put(`${BASE_URL}/generateCondensedRecipe`, {
        link: props.link,
      });

      setIngredients(response.data.ingredientsArr);
      setInstructions(response.data.instructionsArr);
    };
    fetchData();
  }, [props.link]);

  console.log({ props });
  return (
    <Grid container>
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
            image={props.imgSrc}
            alt={props.name}
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
};
