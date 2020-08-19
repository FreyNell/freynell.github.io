import React from 'react';
import Red from "../assets/red.png";
import Blue from "../assets/blue.png";
import Yellow from "../assets/yellow.png";
import { Card, CardMedia, CardContent, Typography, makeStyles, CardActionArea, CardActions, Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rootCard: {
        display: "inline-block",
        margin: "10px",
        width: 345,
    },
    content:{
        overflowY:"auto",
        height:"150px"
    },
    media: {
        height: 140,
    },
    cardTitle: {
        marginLeft:"16px"
    }
}));

function Works() {
    const classes = useStyles();
    let worked = [
        {title:"TREEBUILDER",content:"Creador de arbol de talentos para hojas de vida o páginas personales.",link:"https://github.com/FreyNell/treebuilder", img:Yellow},
        { title: "ENVGLOBEL", content: "Presentado en GlobHack 2020, consiste de un Dashboard que provee información de la contaminación producida por los vehículos en las calles de una ciudad, con el fin de ser mas precisos con las medidas gubernamentales tales como el pico y placa.", link: "https://github.com/FreyNell/EnvGlobel", img:Blue},
        { title: "CO-LEG 3D", content: "CO-LEG 3D es una aplicación construída con el Stack MERN que busca permitir al cliente personalizar un diseño 3D Online de la protesis que desea adquirir con la empresa CO-LEG.", link: "https://design.co-leg.com/", img:Red }
    ];

    let res = worked.map((work,i) =>
        <Card key={i} className={classes.rootCard}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={work.img}
                    title={work.title}
                />
                <Typography className={classes.cardTitle} variant="h5" component="h2">
                        {work.title}
                </Typography>
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {work.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link href={work.link} color="warning" variant="button">Ver más</Link>
            </CardActions>
        </Card>
        );
    return (
        res
    );
}

export default Works;
