import React, {useEffect} from 'react';
import socket  from '../../services/io';
import Menu  from '../../components/menu/menu.component';
import BtnNew from '../../components/btnnew';
import { Container, ContainerPreview } from './style';


function Home() {

useEffect(()=>{

 socket.on('hello', (data)=>{
   console.log(data)
 })


}, [])

  const Enviar = ()=>{
  socket.emit('hello')
  }
 



  return (
    
      <Container>
      
        <ContainerPreview>
          <BtnNew/>  
        <Menu/>
        
        </ContainerPreview>
      </Container>
     
   
  );
}

export default Home;
