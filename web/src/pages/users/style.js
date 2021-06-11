import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',

        marginTop: '50px',
        width: '100%',
        height: '100vh',
        backgroundColor: '#dcdce6',
        padding: '30px'
    },
    title: {
        marginTop: '15px',
        color: 'var(--darkBlue)',
        marginBottom: '10px'
    },
    table: {
        width: '100%'
    },
    tableHeader: {
        backgroundColor: 'var(--cielo)',
        border: '1px solid var(--darkBlue)',
        color: 'var(--darkBlue)',
        fontWeight: 500
    },
    tableBody: {
        border: '1px solid var(--darkBlue)',
        color: 'var(--darkBlue)',
    },
    tableIconsColumn: {
        width: '30px',
        border: '1px solid var(--darkBlue)',
        color: 'var(--darkBlue)',
    },
    tableIcons: {
        cursor: 'pointer',
        transition: '0.5s',

        '&:hover': {
            opacity: '0.7'
        }
    }
}));

export default useStyles;