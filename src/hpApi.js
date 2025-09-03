export async function fetchCharacters() {
    // res is raw HTTP response
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    //res.ok is a boolean - true if response code is 200-299
    if (!res.ok) throw new Error('Failed to fetch characters');
    return res.json();
}