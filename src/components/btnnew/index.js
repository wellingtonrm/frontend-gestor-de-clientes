import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import { Containerbtnnew } from './style'

const btnnew = () => {

function addCliente(){
    alert('Adcionar novo cliente')
}

    return (
        <Containerbtnnew onClick={addCliente}>
            <MaterialIcon icon="add" color="#fff" size={20}/>
        </Containerbtnnew>
    );

}
export default btnnew;