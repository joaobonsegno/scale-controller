import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'var(--darkBlue)',
        width: '100%',
        height: '100vh'
    },
    content: {
        display: 'flex',

        backgroundColor: 'var(--strongBlue)',
        border: '1px solid var(--cielo)',
        borderRadius: '3px'
    },
    loginDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        marginRight: '15px',
        padding: '20px',
        borderRight: '2px solid var(--cielo)'
    },
    loginTitle: {
        color: 'var(--cielo)',
        fontSize: '20px',
        marginBottom: '15px'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    loginButton: {
        marginTop: '18px',
        width: '100%',
        padding: '6px',
        outline: 'none',
        backgroundColor: 'var(--cielo)',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        color: 'var(--darkBlue)',
        transition: '0.5s',

        '&:hover': {
            opacity: '0.8'
        }
    },
    welcomeDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '20px',
    },
    logo: {
        height: '50px',
        marginBottom: '15px'
    },
    welcomeText: {
        fontSize: '14px',
        color: 'var(--cielo)'
    }
}));

export default useStyles;