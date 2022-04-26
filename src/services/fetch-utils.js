export async function avatarApiFetch() {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const data = res.json();
  const name = data.name;
  const photo = data.photoUrl;

  return { name, photo };
}