import React from 'react';
import Tree from "../assets/tree.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
}));

function TalentTree() {
  const classes = useStyles();
  return (
      <figure>
          <img src={Tree} alt="tree"/>
          <figcaption><i>FIG.1 Arbol de Talentos construido en mi aplicación TreeBuilder</i></figcaption>
      </figure>
  );
}

export default TalentTree;
