import { useState } from 'react';
import Cell from './Cell.js';
import './Cell.css';

const Board = () => {
    const [lights, setLights] = useState([true, false, true, false, true]);

    const toggleLight = (index) => {
        setLights(prevState => {
            return prevState.map ((light, i) => {
                return i == index ? !light : light
            });
        });
    };
    return (
        <div >
            {lights.map((isOn, index) => (
                <Cell
                    key={index}
                    cellIndex={index}
                    isOn={isOn}
                    toggleLight={() => toggleLight(index)}
                />
            ))}
        </div>
    );
}
export default Board;