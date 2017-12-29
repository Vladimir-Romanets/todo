import React from 'react';
import './style.css';

export default function ManageToolbar({ fetchLogout, ...rest }){
    return (
        <ul className="mng-btn">
            <li className="mng-btn__item" onClick={ fetchLogout }>
                <img src="./images/logout.svg" alt="Logout" title="Logout" />
            </li>
        </ul>
    )
};