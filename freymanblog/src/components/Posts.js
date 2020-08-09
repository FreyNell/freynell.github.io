import React from 'react';
import Red from "../assets/red.png";
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography, makeStyles, Collapse } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px",
        margin: "30px 0px 30px 0px"
    },
    details: {
        padding: "5px",
        marginLeft: "25px",
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: 25,
        height: 25,
        borderRadius: "50%"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
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
        { title: "Procedimientos Almacenados", subtitle: "- Freyman Lahionnell Balaguera Rubio", content: "Un Procedimiento Almacenado no es mas que un script de SQL que puede o no recibir parámetros al mejor estilo de una función en tu lenguaje favorito.", collapse: "El procedimiento almacenado nace de la necesidad de hacer operaciones complejas con varias tablas y datos en un motór de base de datos SQL, donde dependiendo de una entrada pueda retornar una salida espera de datos para trabajar en las aplicaciones.\n También nos otorga seguridad para evitar el SQL Injection, una de las amenazas a los sitios web entre los top 10 de amenazas a los sitios web descritor en el OWASP TOP 10.\n Una ventaja adicional que nos da el Procedimiento Almacenado, es que nos quita la necesidad de escribir con strings en nuestro código las consultas, inserciones, actualizaciones y borrados que surjan.", img: Red },
    ];

    let res = posted.map((post, i) =>
        <Card className={classes.root}>
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
                <CardContent>
                    <Typography component="body1" color="textSecondary">
                        {post.content}
                    </Typography>
                </CardContent>
                <Collapse in={expanded}>
                    <CardContent><Typography component="body1" color="textSecondary">{post.collapse}</Typography></CardContent>
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
