import { useState } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setIsSubmitted(false);
    setPlayerName(e.currentTarget.value);
  };
  const handleButtonClick = () => {
    setIsSubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : 'unknown entity'}</h2>
      <p>
        <input value={playerName} onChange={handleInputChange} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
