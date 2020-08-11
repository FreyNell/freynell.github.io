import React from "react";
import mifoto from "../assets/mifoto.jpeg";
import {Card, CardMedia, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: "30px",
      margin: "30px 0px 30px 0px"
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      minWidth:100,
      minHeight:100,
      width: 100,
      height: 100,
      borderRadius: "50%"
    },
}));

function Phrase() {
    const classes = useStyles();
return(<Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={mifoto}
          title="Freyman"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="i">
              "No importa que tan <strong>GRANDE</strong> sea el <strong>RETO</strong>, siempre y cuando aprendas de él".
          </Typography>
            <br />
            <Typography component="subtitle1" color="textSecondary">
              - Freyman Lahionnell Balaguera Rubio
          </Typography>
          </CardContent>
        </div>
      </Card>);
}

export default Phrase;