import React from 'react';
import Buttons from './buttons';
import ShowArea from './showArea';
import { Color } from './color';

function Exampel(){
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Exampel