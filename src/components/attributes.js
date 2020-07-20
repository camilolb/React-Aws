import React, { useEffect, useContext, useState } from "react";
import {AccountContext} from './account';
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export default () => {

    const [plan, setPlan] = useState('');
    
    const { getSession } = useContext(AccountContext);

    useEffect (() => {
        getSession().then(data => {
            console.log("DATA: ", data);
            setPlan(data["custom:plan"]);
        });
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();

        getSession().then(({user}) => {
            debugger;

            const attributes = [
                new CognitoUserAttribute({ Name: "custom:plan", Value: plan }),
              ];

            user.updateAttributes(attributes, (err, result) => {
                if(err) console.error(err);
                console.log(result);
            });
        });
    }

    return (
        <div>
            <hr /><br></br>
            <h1>Actualizar tu plan: </h1>
            <small>atributos de la sessión personalizados</small>
            <form onSubmit={onSubmit}>
                <input value={plan} onChange={(event) => setPlan(event.target.value)} />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )
}