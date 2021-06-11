import { makeStyles  } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: '100%',
        padding: '10px',
        backgroundColor: 'var(--darkBlue)',
        position: 'fixed',
        top: '0'
    },
    cieloLogo: {
        height: '30px',
        marginRight: '30px'
    },
    navigator: {
        display: 'flex',
        alignItems: 'center'
    },
    list: {
        display: 'flex',
    },
    listItem: {
        listStyle: 'none',
        marginRight: '20px'
    },
    link: {
        textDecoration: 'none',
        color: 'var(--cielo)',
        transition: '0.5s',

        '&:hover': {
            opacity: '0.7'
        }
    },
    logoutSpan: {
        display: 'flex',
        alignItems: 'center',

        color: 'var(--cielo)',
        marginRight: '5px',
        cursor: 'pointer',
        transition: '0.5s',

        '&:hover': {
            opacity: '0.7'
        }
    }
}));

export default useStyles;