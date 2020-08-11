import React from 'react';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import Phrase from "./layout/Phrase";
import Works from "./components/Works";
import Posts from "./components/Posts";
import { Container, makeStyles, Typography, Paper } from '@material-ui/core';
import TalentTree from './layout/TalentTree';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
    margin: "30px 0px 30px 0px",
  },
  details: {
    overflowY: "auto",
    maxHeight: "600px",
  },
  content: {
    flex: '1 0 auto',
  },
}));

function App() {
  const classes = useStyles();
  let sections = [
    { title: "Publicaciones", subtitulo: "A lo largo de mi vida he querido ayudar a todos los que empiezan a entender mejor el mundo de la Informática, es por eso que existe éste apartado.", component:<Posts /> },
    { title: "Trabajos y Colaboraciones", subtitulo: "Mis oportunidades para desarrollo y skills de manera personal (Sin trabajar para una empresa.), explorando los distintos lenguajes existentes.", component: <Works /> },
    { title: "Arbol de Talentos", subtitulo: "Skills", component: <TalentTree /> },
  ];
  let papers = sections.map((sect, i) =>
    <Paper key={i} className={classes.root} elevation={0} variant="outlined">
      <Typography variant="h5">
        {sect.title}
      </Typography>
      <Typography variant="subtitle1">
        {sect.subtitulo}
      </Typography>
      <div className={classes.details}>
        {sect.component}
      </div>
    </Paper>)
  return (
    <Container maxWidth="md">
      <Header />
      <Phrase />
      {papers}
      <Footer />
    </Container>
  );
}

export default App;