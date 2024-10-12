import { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [currentCharacterId, setCurrentCharacterId] = useState(null);
  const handleCharacterSelect = (characterId) => {
    setCurrentCharacterId(characterId);
  };

  return (
    <div>
      <h2>Marvel Character List</h2>
      <CharacterList onCharacterSelect={handleCharacterSelect}/>
      <h2>Character Details:</h2>
      <small>Click character to display its details.</small>
      {currentCharacterId && <CharacterDetail characterId={currentCharacterId} />}
    </div>
  );
};

export default App
