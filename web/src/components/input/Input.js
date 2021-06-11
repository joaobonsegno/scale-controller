import React from 'react';
import useStyles from './styles';

export default function Input(props) {
    const classes = useStyles();

    return(
        <input className={classes.inputs} {...props} required/>
    );
}