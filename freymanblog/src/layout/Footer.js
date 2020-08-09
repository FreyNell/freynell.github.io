import React from 'react';
import { Typography, Link,CardContent,Card, makeStyles } from "@material-ui/core";
import theme from "../theme";

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
  }));

function Footer() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <footer style={{ marginTop: theme.spacing(2) }}>
            <Typography component="h5" variant="h5">Información de Contacto</Typography>
            <br />
            <Typography>E-mail: <Link>freybalaguera@gmail.com</Link></Typography>
            <Typography><Link href="linkedin.com/in/freybalaguera">LinkedIn</Link></Typography>
            <Typography><Link href="https://github.com/FreyNell">GitHub</Link></Typography>
            </footer>
          </CardContent>
        </div>
      </Card>        
    );
}

export default Footer;
