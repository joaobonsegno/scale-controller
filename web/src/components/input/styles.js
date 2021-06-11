import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    inputs: {
        marginBottom: '7px',
        fontSize: '14px',
        padding: '4px',
        backgroundColor: '#24247e',
        borderBottom: '2px solid #00AEEF',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        transition: 'border 0.5s',
        color: '#00AEEF',

        '&:hover': {
            borderBottom: '2px solid #333385',
        },
        '&:focus': {
            borderBottom: '2px solid #333385',
        },
        '&::placeholder': {
            color: '#00AEEF',
            opacity: '0.5'
        }
    }
}));

export default useStyles;