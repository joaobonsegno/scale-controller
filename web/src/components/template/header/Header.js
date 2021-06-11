import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import useStyles from './styles';
import CieloLogo from '../../../assets/cielo-logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Header() {
    const classes = useStyles();
    const { signed, logout } = useAuth();

    function handleLogout() {
        logout();
    }

    return(
        <>
        {!signed ? null : (
            <header className={classes.container}>
                <nav className={classes.navigator}>
                    <Link to='/'><img src={CieloLogo} alt='Cielo' className={classes.cieloLogo}/></Link>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <Link className={classes.link} to='/users'>Usuários</Link>
                        </li>
                        <li className={classes.listItem}>
                            <Link className={classes.link} to='/users'>Tecnologias</Link>
                        </li>
                    </ul>
                </nav>
                <span className={classes.logoutSpan} onClick={handleLogout}>Sair<ExitToAppIcon style={{marginLeft: '3px'}}/></span>
            </header>
        )}
        </>
        
    );
    
}