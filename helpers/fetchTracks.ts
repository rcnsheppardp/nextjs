export async function fetchTracks() {
  const response = await fetch("/hits.json");
  const data = await response.json();
  return data;
}
