import React from 'react';
import './style.css';

export default function ManageToolbar({ fetchLogout, login }){
    return (
        <ul className='toolbar'>
            <li className='toolbar__item'>
                Username: <b>{ login }</b>
            </li>
            <li className='toolbar__item' onClick={ () => fetchLogout({login}) }>
                <img src='./images/logout.svg' alt='Logout' title='Logout' />
            </li>
        </ul>
    )
};