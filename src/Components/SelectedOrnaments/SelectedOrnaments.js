import React from 'react';
import './SelectedOrnaments.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedOrnaments = (props) => {
    const { info } = props;

    console.log(info);
    return (
        <div className='selected-head'>

            <div className='select-container'>
                <img src={info.img} alt="" />
                <p> {info.name}</p>
                <button style={{ backgroundColor: 'white', border: 'white' }}> <FontAwesomeIcon icon={faTrash} /></button>
            </div>

        </div>
    );
};

export default SelectedOrnaments;