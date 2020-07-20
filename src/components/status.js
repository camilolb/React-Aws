import React, {useState,useContext, useEffect } from 'react';
import {AccountContext } from './account';

export default() => {

    const [status, setStatus] = useState(false);
    const {getSession, logout} = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(session => {
                debugger;
                console.log("Session: ", session);
                setStatus(true);
            })
    }, [])


    return(
        <div>
            {status ? (
                <div>
                    Logueado
                    <button onClick={logout}> Logout</button>
                </div>
            ) : 'Por favor loguearse'}
        </div>
    );
}