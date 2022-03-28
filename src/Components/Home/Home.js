import React, { useEffect, useState } from 'react';
import Ornaments from '../Ornaments/Ornaments';
import SelectedOrnaments from '../SelectedOrnaments/SelectedOrnaments';
import './Home.css'

const Home = () => {
    const [ornaments, setOrnament] = useState([]);
    const [selectOrnament, setSelectOrnament] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setOrnament(data))
    }, []);
    const handlerAddToCart = (ornament) => {
        const newNew = [...selectOrnament, ornament]
        setSelectOrnament(newNew)
    }

    const RandomItemFromArray = ornament => {

        const random = ornament[Math.floor(Math.random() * ornament.length)];

        const randomArray = [random];
        setSelectOrnament(randomArray)
    }
    const chooseAgain = (ornament) => {

        ornament = [];
        setSelectOrnament(ornament)
    }

    return (
        <div className='ornaments-home'>
            <div className='ornament-container'>
                {
                    ornaments.map(ornament => <Ornaments
                        ornament={ornament}
                        key={ornament.id}
                        handlerAddToCart={handlerAddToCart}
                    ></Ornaments>)
                }
            </div>

            <div className='selected-ornaments'>

                <div className='ornaments-selector'>
                    <h3>Selected Ornaments</h3>

                    {
                        selectOrnament.map(newOrnament => <SelectedOrnaments
                            info={newOrnament}
                            key={newOrnament.id}
                        ></SelectedOrnaments>)
                    }
                    <div>
                        <button className='selected-btn' onClick={() => RandomItemFromArray(selectOrnament)}>Choose 1 for you</button>
                        <button className='selected-btn' onClick={() => chooseAgain(selectOrnament)}>Choose again</button>
                        {

                        }

                    </div>
                </div>



            </div>

        </div>
    );
};

export default Home;