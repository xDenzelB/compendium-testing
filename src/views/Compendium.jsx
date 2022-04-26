import { useState, useEffect } from 'react';
import { avatarApiFetch } from '../services/fetch-utils';


export default function Compendium() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const characterList = await avatarApiFetch();
      setCharacters(characterList);
    }

    getCharacters();
  }, [])

  return (
    <>
      <h1>Characters from Avatar!</h1>
      <>
        <input placeholder='Find a Character' value={search} />
      </>
    </>
  )
}