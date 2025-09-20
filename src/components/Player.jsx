import { useState, useRef } from 'react';

export default function Player() {
  const nameInput = useRef();
  const [playerName, setPlayerName] = useState('');

  const handleButtonClick = () => {
    setPlayerName(nameInput.current.value);
    nameInput.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input ref={nameInput} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
