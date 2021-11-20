import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ListAltTwoTone } from "@material-ui/icons";
import { setCondensedRecipe } from "../redux/recipeSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  return (
    <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
      <Card sx={{ maxWidth: 345 }} className={classes.recipeCard}>
        <CardHeader title={`From ${props.sourceName}`} />
        <Link href={`https://${props.sourceUrl}`}>
          <Typography variant="body1">Head to {props.sourceUrl}</Typography>
        </Link>
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
            onClick={() => dispatch(setCondensedRecipe({ ...props }))}
          >
            <ListAltTwoTone />
            Condensed
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => window.open(props.link, "_blank")}
          >
            <ListAltTwoTone />
            Original
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
