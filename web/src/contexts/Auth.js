import React, { useState, useEffect, createContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    function login(user, token) {
        setUser(user);
        localStorage.setItem('token', `Bearer ${token}`);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('token');
    }

    useEffect(() => {
        async function verifyCurrentSession() {
            try {
                const response = await api.get('/session', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
    
                setUser(response.data.user);
            } catch(ex) {
                console.error('Failed to recover session');
            }
        }
        verifyCurrentSession();
    }, []);

    

    return(
        <AuthContext.Provider value={{signed: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}