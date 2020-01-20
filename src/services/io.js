import io from 'socket.io-client';


const socket = io('http://localhost:5550');
socket.on('connect', () => {
    console.log('conectado')
})

export default socket;