import { useEffect } from 'react';
import io from 'socket.io-client';
let socket;

export default function Home() {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', (s) => {
      console.log('connected with id ', s.id);
    });
  };

  return (
    <div>
      <p>hello, world!</p>
    </div>
  );
}
