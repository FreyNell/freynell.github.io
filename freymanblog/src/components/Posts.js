import React from 'react';
import Red from "../assets/red.png";
import Blue from "../assets/blue.png";
import { Card, CardMedia, CardActions, IconButton, Typography, makeStyles, Collapse } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px",
        margin: "30px 0px 30px 0px",
        backgroundColor:"#F5F5F5",
    },
    details: {
        padding: "5px",
        marginLeft: "25px",
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        minWidth:24,
        minHeight:24,
        width: 24,
        height: 24,
        borderRadius: "50%"
    },
    expand: {
        backgroundColor:theme.palette.primary.contrastText,
        color:theme.palette.primary.main,
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        backgroundColor:theme.palette.primary.contrastText,
        color:theme.palette.primary.main,
        transform: 'rotate(180deg)',
    },
}));

function Posts() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let posted = [
        { title: "Guía para Principiantes", subtitle: "- Freyman Lahionnell Balaguera Rubio", 
        content:<p>Los siguientes son Terminos clave que deberías conocer como Ingeniero de Desarrollo JR.</p>, 
        collapse: <div>
            <h4>JSON - el puente Universal.</h4>
            <p>Pronto...</p>
            <h4>Principios Solid en el Desarrollo</h4>
            <p>Pronto...</p>
            <h4>Procedimientos Almacenados</h4>
            <p>Un Procedimiento Almacenado no es mas que un script de SQL que puede o no recibir parámetros al mejor estilo de una función en tu lenguaje favorito.</p><p>El procedimiento almacenado nace de la necesidad de hacer operaciones complejas con varias tablas y datos en un motór de base de datos SQL, donde dependiendo de una entrada pueda retornar una salida espera de datos para trabajar en las aplicaciones.</p>
            <p> También nos otorga seguridad para evitar el SQL Injection, una de las amenazas a los sitios web entre los top 10 de amenazas a los sitios web descritor en el OWASP TOP 10.</p>
            <p> Una ventaja adicional que nos da el Procedimiento Almacenado, es que nos quita la necesidad de escribir con strings en nuestro código las consultas, inserciones, actualizaciones y borrados que surjan.</p>
            <h4>Frameworks de Base de Datos</h4>
            <p>Pronto...</p>
            <h4>Pruebas Unitarias</h4>
            <p>Pronto...</p>
            <h4>Integración Continua</h4>
            <p>Pronto...</p>
            <h4>Despliegue Continuo</h4>
            <p>Pronto...</p>            
            </div>, img: Blue },
    ];

    let res = posted.map((post, i) =>
        <Card className={classes.root} elevation={1}>
            <CardMedia
                className={classes.cover}
                image={post.img}
                title="post"
            />
            <div className={classes.details}>
                <Typography variant="h5" >
                    {post.title}
                </Typography>
                <Typography component="subtitle1" color="textSecondary">
                    {post.subtitle}
                </Typography>
                    <Typography component="body1" color="textSecondary">
                        {post.content}
                    </Typography>
                <Collapse in={expanded}>
                    <Typography component="body1" color="textSecondary">{post.collapse}</Typography>
                </Collapse>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
    return (
        res
    );
}

export default Posts;
