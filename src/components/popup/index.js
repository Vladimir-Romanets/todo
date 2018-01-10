import React from 'react';
import './style.css';

const Popup = ({ parentClass, msg, timeout, popupClose }) => {
    const timerID = msg.length ? setTimeout(popupClose, timeout) : null;
    
    const clickHandler = msg.length ? () => {
        clearTimeout(timerID);
        popupClose();
    } : null;

    return (
        <div id='popup'
            className={ parentClass }
            onClick={ clickHandler } >

            <div className='popup__body' onClick={ (e) => e.stopPropagation() }>
                { msg }
            </div>

        </div>
    )
};

export default Popup;