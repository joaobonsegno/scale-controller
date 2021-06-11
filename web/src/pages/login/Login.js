import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import useStyles from './styles';
import Input from '../../components/input/Input';
import api from '../../services/api';
import CieloLogo from '../../assets/cielo-logo.png';

export default function Login() {
    const classes = useStyles();
    const { signed, login } = useAuth();

    // States
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle functions
    function handleUsernameChange(evt) {
        setUsername(evt.target.value);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();

        try {
            const response = await api.post('/authenticate', {
                username,
                password
            });

            login(response.data.user, response.data.token);
        } catch(ex) {
            alert('Houve um erro ao fazer login. Tente novamente mais tarde.');
        } 
    }

    return(
        <>
        {signed ? (<Redirect to='/home'/>) : (
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.loginDiv}>
                        <h1 className={classes.loginTitle}>Login</h1>
                        <form onSubmit={handleSubmit} className={classes.loginForm}>
                            <Input type='text' required placeholder='Usuário' onChange={handleUsernameChange}/>
                            <Input type='password' required placeholder='Senha' onChange={handlePasswordChange}/>
                            <button type='submit' className={classes.loginButton}>Entrar</button>
                        </form>
                    </div>

                    <div className={classes.welcomeDiv}>
                        <img src={CieloLogo} alt='Cielo' className={classes.logo}/>
                        <h2 className={classes.welcomeText}>Seja bem-vindo ao sistema de escalas da Cielo!</h2>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}