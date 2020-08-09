import React from 'react';
import { makeStyles,AppBar, Toolbar, Typography, Button  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          {"Freyman's Blog"}
        </Typography>
        {/* <Button color="inherit">Publicaciones</Button>*/}
        {/* <Button color="inherit">Experiencia</Button>
        <Button color="inherit">Acerca de mi</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
