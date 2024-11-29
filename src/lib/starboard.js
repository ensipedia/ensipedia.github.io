export async function getStarboard() {
  const response = await fetch("starboard.json");
  return await response.json();
}