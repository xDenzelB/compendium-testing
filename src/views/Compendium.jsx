import { useState, useEffect } from 'react';
import { avatarApiFetch } from '../services/fetch-utils';

export default function Compendium() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const isSearching = !!search.length;
  const noResults = isSearching && !results.length;
  const characterList = isSearching ? results : characters;

  function handleSearch(event) {
    setSearch(event.target.value);

    const filteredCharacters = characters.filter((character) =>
      character.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim())
    );
    setResults(filteredCharacters);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const characterList = await avatarApiFetch();
      console.log(characterList);
      setCharacters(characterList);
    }

    getCharacters();
    setLoading(false);
  }, [])

  return (
    <>
      <h1>Characters from Avatar!</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
      <><>
            <input placeholder='Find a Character' value={search} onChange={handleSearch} />
          </><div>
              {characterList.map((character) => {
                return (
                  <div>
                    <h3>{character.name}</h3>
                    <img src={character.photo} />
                  </div>
                );
              })}
            </div></> 
      )}
      {noResults && <p>No results found ):</p>}
    </>
  )
}