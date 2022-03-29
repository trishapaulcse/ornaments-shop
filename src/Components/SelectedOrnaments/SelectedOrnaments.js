import React from 'react';
import './SelectedOrnaments.css'


const SelectedOrnaments = (props) => {
    const { info } = props;

    console.log(info);
    return (
        <div className='selected-head'>

            <div className='select-container'>
                <img src={info.img} alt="" />
                <p> {info.name}</p>
                <button style={{ backgroundColor: 'white', border: 'white' }}> </button>
            </div>

        </div>
    );
};

export default SelectedOrnaments;