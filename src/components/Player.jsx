import { useState } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleButtonClick = () => {
    setPlayerName(inputValue);
    setInputValue('');
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input value={inputValue} onChange={handleInputChange} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
