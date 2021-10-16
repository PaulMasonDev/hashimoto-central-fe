import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ListAltTwoTone } from "@material-ui/icons";
const useStyles = makeStyles({
  recipeCard: {
    margin: "10px",
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
});
export const RecipeCard = (props) => {
  const classes = useStyles();
  const handleClick = () => {
    window.open(props.link, "_blank");
  };
  return (
    <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
      <Card sx={{ maxWidth: 345 }} className={classes.recipeCard}>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={props.imgSrc}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h5">{props.name}</Typography>
        </CardContent>
        <CardActions className={classes.buttonGroup}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <ListAltTwoTone />
            Condensed
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            <ListAltTwoTone />
            Original
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
