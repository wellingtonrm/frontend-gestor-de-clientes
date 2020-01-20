import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import { ContainerMenu } from './style'

const menu = ()=>{

    return(
    <ContainerMenu>
      <ul>
                <li> <MaterialIcon icon="add" color="#fff" size={20} /></li>
      </ul>
    </ContainerMenu>
    );

}
export default menu;