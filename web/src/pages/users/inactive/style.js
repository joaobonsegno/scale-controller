import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',

        width: '100%',
        height: '100vh',
        backgroundColor: '#dcdce6',
        
    },
    title: {
        marginTop: '95px',
        color: 'var(--darkBlue)',
        marginBottom: '10px',
        marginLeft: '30px'
    },
    interationDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '100%',
        marginTop: '15px',
        marginBottom: '10px',
        padding: '0 30px'
    },
    searchDiv: {
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        color: 'var(--darkBlue)'
    },
    searchInput: {
        fontSize: '13px',
        color: 'var(--darkBlue)',
        borderBottom: '2px solid var(--darkBlue)',
        borderRight: 'none',
        borderLeft: 'none',
        borderTop: 'none',
        backgroundColor: '#dcdce6',
        padding: '2px 4px',
        transition: '0.5s',

        '&::placeholder': {
            color: 'var(--darkBlue)',
            opacity: '0.7'
        },
        '&:focus': {
            borderBottom: '2px solid var(--cielo)',
            '&.searchIcon': {
                color: 'var(--cielo)'
            }
        }
    },
    seeInactiveUsers: {
        fontSize: '14px',
        textDecoration: 'none',
        border: '1px solid var(--darkBlue)',
        borderRadius: '4px',
        padding: '2px 4px',
        color: 'var(--strongBlue)',
        transition: '0.5s',

        '&:hover': {
            opacity: '0.7'
        }
    },
    table: {
        width: '100%',
        padding: '0 30px'
    },
    tableHeader: {
        color: 'var(--darkBlue)',
        fontWeight: 500,
        opacity: '0.7',
    },
    tableHeaderCell: {
        padding: '5px', 
        paddingLeft: '15px', 
        borderBottom: '1px solid var(--darkBlue)', 
        color: 'var(--darkBlue)'
    },
    tableBody: {
        color: 'var(--darkBlue)',
    },
    tableBodyRow: {
        transition: '0.7s',
        
        '&:hover': {
            backgroundColor: '#87CEEB',
            cursor: 'pointer'
        }
    },
    tableBodyCell: {
        color: 'var(--darkBlue)',
        paddingTop: '12px', 
        paddingBottom: '12px', 
        paddingLeft: '10px',
        fontSize: '13px',
        border: 'none'
    },
    tableBodyCellLoading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        color: 'var(--darkBlue)',
        paddingTop: '12px', 
        paddingBottom: '12px', 
        paddingLeft: '10px',
        fontSize: '13px',
        border: 'none'
    },
    tableIconsColumn: {
        color: 'var(--darkBlue)',
        border: 'none',
        paddingTop: '12px', 
        paddingBottom: '12px'
    },
    tableIcons: {
        cursor: 'pointer',
        transition: '0.5s',

        '&:hover': {
            opacity: '0.7'
        }
    },
    footerSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        width: '100%',
        bottom: '0',
        position: 'absolute',
        padding: '10px 30px'
    },
    footerArrow: {
        display: 'flex',
        alignItems: 'center',

        color: 'var(--darkBlue)',
        border: '1px solid var(--darkBlue)',
        borderRadius: '10px',
        padding: '4px',
        cursor: 'pointer',
        transition: '0.5s',
        outline: 'none',
        background: '#dcdce6',

        '&:hover': {
            opacity: '0.7'
        },
        '&:disabled': {
            opacity: '0.4',
            cursor: 'default'
        }
    },
    textSpan: {
        color: 'var(--darkBlue)',
        marginLeft: '7px',
        marginRight: '7px',
    }
}));

export default useStyles;