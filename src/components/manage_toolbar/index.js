import React from 'react';
import './style.css';

export default function ManageToolbar({ fetchLogout, login, ...rest }){
    return (
        <ul className="mng-btn">
            <li className="mng-btn__item" onClick={ () => fetchLogout({login}) }>
                <img src="./images/logout.svg" alt="Logout" title="Logout" />
            </li>
        </ul>
    )
};