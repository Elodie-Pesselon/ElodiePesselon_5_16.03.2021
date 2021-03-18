async function getTeddies() {
    let response = await fetch ("http://localhost:3000/api/teddies");
    let data = await response.json();
}