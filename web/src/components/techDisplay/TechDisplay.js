import React from 'react';
import useStyles from './styles';

export default function TechDisplay({name, ...rest}) {
    const classes = useStyles();

    return(
        <span className={classes.tech} {...rest}>
            {name}
        </span>
    );
}