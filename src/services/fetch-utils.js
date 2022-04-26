export async function avatarApiFetch() {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const data = await res.json();
  const characters = data[0].name;
  const photo = data[0].photoUrl;


  return { characters, photo };
}